# Talty Digital LLC Website - Form Submission Implementation Guide

This document provides a detailed guide for implementing the form submission functionality using Google Cloud Functions and Firestore database.

## Directory Structure

```
functions/
├── package.json
├── tsconfig.json
├── src/
│   ├── index.ts
│   ├── submitForm.ts
│   └── utils/
│       ├── validation.ts
│       └── firestore.ts
```

## Implementation Files

### package.json

```json
{
  "name": "talty-digital-functions",
  "version": "1.0.0",
  "description": "Cloud Functions for Talty Digital LLC website",
  "main": "lib/index.js",
  "scripts": {
    "build": "tsc",
    "serve": "npm run build && firebase emulators:start --only functions",
    "shell": "npm run build && firebase functions:shell",
    "start": "npm run shell",
    "deploy": "firebase deploy --only functions",
    "logs": "firebase functions:log"
  },
  "engines": {
    "node": "18"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "firebase-admin": "^11.8.0",
    "firebase-functions": "^4.3.1",
    "joi": "^17.9.2"
  },
  "devDependencies": {
    "@types/cors": "^2.8.13",
    "@types/express": "^4.17.17",
    "firebase-functions-test": "^3.1.0",
    "typescript": "^5.1.6"
  },
  "private": true
}
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "outDir": "lib",
    "sourceMap": true,
    "strict": true,
    "target": "es2017",
    "esModuleInterop": true
  },
  "compileOnSave": true,
  "include": [
    "src"
  ]
}
```

### src/index.ts

```typescript
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { submitFormHandler } from './submitForm';

// Initialize Firebase Admin
admin.initializeApp();

// Export the submitForm function
export const submitForm = functions.https.onRequest(submitFormHandler);
```

### src/submitForm.ts

```typescript
import * as express from 'express';
import * as cors from 'cors';
import { validateFormData } from './utils/validation';
import { saveFormSubmission } from './utils/firestore';

const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// Form submission endpoint
app.post('/', async (req, res) => {
  try {
    const formData = req.body;
    
    // Validate form data
    const { error, value } = validateFormData(formData);
    if (error) {
      return res.status(400).json({ 
        success: false, 
        error: error.details[0].message 
      });
    }
    
    // Save to Firestore
    const submissionId = await saveFormSubmission(value);
    
    // Return success response
    return res.status(200).json({ 
      success: true, 
      message: 'Form submitted successfully',
      submissionId
    });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Internal server error' 
    });
  }
});

export const submitFormHandler = app;
```

### src/utils/validation.ts

```typescript
import * as Joi from 'joi';

// Form data validation schema
const formSchema = Joi.object({
  name: Joi.string().required().trim().min(2).max(100),
  email: Joi.string().required().email().trim(),
  subject: Joi.string().allow('').trim().max(200),
  message: Joi.string().required().trim().min(10).max(1000)
});

// Validate form data against schema
export const validateFormData = (data: any) => {
  return formSchema.validate(data, { abortEarly: false });
};
```

### src/utils/firestore.ts

```typescript
import * as admin from 'firebase-admin';

// Interface for form submission data
interface FormSubmission {
  name: string;
  email: string;
  subject?: string;
  message: string;
  timestamp: admin.firestore.Timestamp;
}

// Save form submission to Firestore
export const saveFormSubmission = async (data: any): Promise<string> => {
  const db = admin.firestore();
  
  const submissionData: FormSubmission = {
    ...data,
    timestamp: admin.firestore.Timestamp.now()
  };
  
  const docRef = await db.collection('formSubmissions').add(submissionData);
  return docRef.id;
};
```

## Frontend Integration

### Update ContactForm.tsx

Modify the `handleSubmit` function in the ContactForm component:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  if (!validateForm()) {
    return;
  }
  
  setIsSubmitting(true);
  
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_FORM_API_URL || '/api/submitForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    const result = await response.json();
    
    if (!result.success) {
      throw new Error(result.error || 'Form submission failed');
    }
    
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  } catch (error) {
    console.error('Error submitting form:', error);
    setErrors((prev) => ({
      ...prev,
      form: 'Failed to submit the form. Please try again later.'
    }));
  } finally {
    setIsSubmitting(false);
  }
};
```

## Deployment Steps

1. **Initialize Firebase Project**:
   ```bash
   firebase login
   firebase init functions
   ```

2. **Install Dependencies**:
   ```bash
   cd functions
   npm install
   ```

3. **Build and Deploy**:
   ```bash
   npm run build
   firebase deploy --only functions
   ```

4. **Get Function URL**:
   After deployment, Firebase will provide a URL for the deployed function. Use this URL as the value for `NEXT_PUBLIC_FORM_API_URL` in your frontend environment variables.

## Firestore Setup

1. **Create Firestore Database**:
   - Go to Firebase Console
   - Select your project
   - Navigate to Firestore Database
   - Click "Create Database"
   - Choose a location close to your users
   - Start in production mode

2. **Set Up Security Rules**:
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       // Form submissions can only be created by authenticated server
       // and read by admins
       match /formSubmissions/{submission} {
         allow create: if request.auth != null;
         allow read: if request.auth != null && request.auth.token.admin == true;
         allow update, delete: if false;
       }
     }
   }
   ```

## Testing

1. **Local Testing**:
   ```bash
   cd functions
   npm run serve
   ```

2. **Test with cURL**:
   ```bash
   curl -X POST http://localhost:5001/[PROJECT_ID]/us-central1/submitForm \
     -H "Content-Type: application/json" \
     -d '{"name":"Test User","email":"test@example.com","subject":"Test Subject","message":"This is a test message"}'
   ```

3. **Verify in Firestore**:
   - Check the Firebase Console
   - Navigate to Firestore Database
   - Verify that a new document was created in the `formSubmissions` collection

## Next Steps

1. Implement the Cloud Functions code following this guide
2. Set up Firestore database with proper security rules
3. Update the ContactForm component to use the Cloud Function API
4. Test the form submission functionality
5. Deploy to production