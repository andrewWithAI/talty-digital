# Talty Digital LLC Website - Cloud Deployment Plan

This document outlines the detailed implementation plan for deploying the Talty Digital LLC website on Google Cloud Run with a database for form submissions.

## Architecture Overview

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│  Next.js        │     │  Cloud          │     │  Firestore      │
│  Frontend       │────▶│  Functions      │────▶│  Database       │
│  (Cloud Run)    │     │  (Serverless)   │     │                 │
│                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

The architecture consists of three main components:
1. **Next.js Frontend** - Deployed on Google Cloud Run as a containerized application
2. **Cloud Functions** - Serverless backend for processing form submissions
3. **Firestore Database** - NoSQL database for storing form submission data

## Implementation Steps

### 1. Frontend Configuration (Cloud Run)

#### 1.1 Create Dockerfile for Next.js Frontend

Create a Dockerfile in the frontend directory:

```dockerfile
# Use Node.js LTS as the base image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all files
COPY . .

# Build the application
RUN npm run build

# Production image
FROM node:18-alpine AS runner

WORKDIR /app

# Set environment to production
ENV NODE_ENV=production

# Copy necessary files from builder
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port the app will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
```

#### 1.2 Create .dockerignore File

Create a .dockerignore file in the frontend directory:

```
node_modules
.git
.github
.next
*.md
.env*
```

#### 1.3 Configure Environment Variables

Create a .env.production file for production environment variables:

```
# API URL for the form submission endpoint
NEXT_PUBLIC_FORM_API_URL=https://us-central1-talty-digital.cloudfunctions.net/submitForm
```

### 2. Backend Implementation (Cloud Functions)

#### 2.1 Set Up Cloud Functions Directory Structure

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

#### 2.2 Initialize Cloud Functions Project

Create a package.json file in the functions directory:

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

Create a tsconfig.json file in the functions directory:

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

#### 2.3 Implement Form Submission Function

Create the main index.ts file:

```typescript
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { submitFormHandler } from './submitForm';

// Initialize Firebase Admin
admin.initializeApp();

// Export the submitForm function
export const submitForm = functions.https.onRequest(submitFormHandler);
```

Create the submitForm.ts file:

```typescript
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
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

Create the validation.ts utility:

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

Create the firestore.ts utility:

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

### 3. Database Setup (Firestore)

#### 3.1 Firestore Collection Structure

```
formSubmissions/
├── [auto-generated-id]/
│   ├── name: string
│   ├── email: string
│   ├── subject: string (optional)
│   ├── message: string
│   └── timestamp: timestamp
```

#### 3.2 Firestore Security Rules

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

### 4. Frontend Integration

#### 4.1 Update ContactForm Component

Modify the ContactForm.tsx component to use the Cloud Function API:

```typescript
// In the handleSubmit function of ContactForm.tsx
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

### 5. Deployment Process

#### 5.1 Google Cloud Project Setup

1. Create a new Google Cloud Project (if not already created)
2. Enable required APIs:
   - Cloud Run API
   - Cloud Functions API
   - Firestore API
   - Cloud Build API
   - Container Registry API

#### 5.2 Firebase Project Setup

1. Create a new Firebase project (linked to the Google Cloud project)
2. Initialize Firestore database
3. Set up Firebase CLI for deployment

#### 5.3 Deploy Cloud Functions

```bash
cd functions
npm install
npm run build
firebase deploy --only functions
```

#### 5.4 Deploy Frontend to Cloud Run

```bash
cd frontend
gcloud builds submit --tag gcr.io/[PROJECT_ID]/talty-digital-frontend
gcloud run deploy talty-digital-frontend --image gcr.io/[PROJECT_ID]/talty-digital-frontend --platform managed --region us-central1 --allow-unauthenticated
```

### 6. CI/CD Pipeline (Future Implementation)

#### 6.1 GitHub Actions Workflow

Create a GitHub Actions workflow file (.github/workflows/deploy.yml) for automated deployment:

```yaml
name: Deploy to Google Cloud

on:
  push:
    branches: [ main ]

jobs:
  deploy-functions:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install Functions Dependencies
        run: cd functions && npm ci
      - name: Build Functions
        run: cd functions && npm run build
      - name: Deploy to Firebase
        uses: w9jds/firebase-action@master
        with:
          args: deploy --only functions
        env:
          FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}
          
  deploy-frontend:
    runs-on: ubuntu-latest
    needs: deploy-functions
    steps:
      - uses: actions/checkout@v3
      - name: Set up Cloud SDK
        uses: google-github-actions/setup-gcloud@v1
        with:
          project_id: ${{ secrets.GCP_PROJECT_ID }}
          service_account_key: ${{ secrets.GCP_SA_KEY }}
          export_default_credentials: true
      - name: Build and Push Docker image
        run: |
          cd frontend
          gcloud builds submit --tag gcr.io/${{ secrets.GCP_PROJECT_ID }}/talty-digital-frontend
      - name: Deploy to Cloud Run
        run: |
          gcloud run deploy talty-digital-frontend \
            --image gcr.io/${{ secrets.GCP_PROJECT_ID }}/talty-digital-frontend \
            --platform managed \
            --region us-central1 \
            --allow-unauthenticated
```

## Monitoring and Logging

### 7.1 Set Up Cloud Monitoring

1. Configure Cloud Monitoring for Cloud Run service
2. Set up alerts for error rates and latency
3. Create custom dashboard for key metrics

### 7.2 Configure Logging

1. Set up structured logging in Cloud Functions
2. Create log-based metrics for form submissions
3. Set up error reporting for Cloud Functions

## Security Considerations

### 8.1 API Security

1. Implement rate limiting for form submission API
2. Add CORS restrictions to allow only the frontend domain
3. Consider adding reCAPTCHA to prevent spam submissions

### 8.2 Data Security

1. Ensure Firestore security rules are properly configured
2. Consider encrypting sensitive form data
3. Implement data retention policies for form submissions

## Cost Optimization

### 9.1 Resource Configuration

1. Configure Cloud Run to scale to zero when not in use
2. Use minimum instances for consistent performance
3. Monitor and adjust resource allocation based on usage patterns

### 9.2 Budget Alerts

1. Set up budget alerts for the Google Cloud project
2. Monitor usage of Cloud Run, Cloud Functions, and Firestore
3. Implement cost optimization strategies as needed

## Next Steps

1. Implement the Cloud Functions for form submissions
2. Set up Firestore database with proper security rules
3. Update the ContactForm component to use the Cloud Function API
4. Create Dockerfile and deploy the frontend to Cloud Run
5. Set up monitoring and logging
6. Implement CI/CD pipeline for automated deployments