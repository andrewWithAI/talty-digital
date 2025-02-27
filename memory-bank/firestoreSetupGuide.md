# Talty Digital LLC Website - Firestore Database Setup Guide

This document provides a detailed guide for setting up and configuring a Firestore database to store form submissions for the Talty Digital LLC website.

## Firestore Overview

Firestore is a flexible, scalable NoSQL cloud database from Firebase and Google Cloud Platform. It's well-suited for storing form submission data because:

1. **Flexible Schema**: Easily adapt to changing form fields
2. **Real-time Updates**: Optionally get real-time updates for new submissions
3. **Scalability**: Automatically scales with your application's needs
4. **Security Rules**: Fine-grained access control
5. **Integration**: Seamless integration with other Google Cloud services

## Database Structure

### Collections and Documents

For the form submission system, we'll use a simple structure:

```
formSubmissions/
├── [auto-generated-id]/
│   ├── name: string
│   ├── email: string
│   ├── subject: string (optional)
│   ├── message: string
│   └── timestamp: timestamp
```

This structure allows for:
- Automatic document IDs for each submission
- Storing all relevant form fields
- Timestamp for sorting and filtering submissions

## Setup Process

### 1. Create Firestore Database

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Select your project (or create a new one)
3. Navigate to "Firestore Database" in the left sidebar
4. Click "Create Database"
5. Choose a location close to your users (e.g., `us-central`)
6. Start in production mode
7. Click "Enable"

### 2. Configure Security Rules

Firestore security rules control access to your database. For form submissions, we want to:
- Allow the Cloud Function to write new submissions
- Allow authenticated admins to read submissions
- Prevent unauthorized access

Navigate to the "Rules" tab in Firestore and update the rules:

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

### 3. Create Indexes (if needed)

If you plan to query submissions by multiple fields (e.g., sorting by timestamp while filtering by email), you may need to create composite indexes:

1. Go to the "Indexes" tab in Firestore
2. Click "Add Index"
3. Select "formSubmissions" as the collection
4. Add fields to index (e.g., "email" and "timestamp")
5. Set the order (Ascending/Descending) as needed
6. Click "Create"

## Integration with Cloud Functions

### Writing to Firestore

In your Cloud Function, use the Firebase Admin SDK to write to Firestore:

```typescript
import * as admin from 'firebase-admin';

// Initialize Firebase Admin (do this once in your application)
admin.initializeApp();

// Save form submission to Firestore
export const saveFormSubmission = async (data: any): Promise<string> => {
  const db = admin.firestore();
  
  const submissionData = {
    name: data.name,
    email: data.email,
    subject: data.subject || '',
    message: data.message,
    timestamp: admin.firestore.Timestamp.now()
  };
  
  const docRef = await db.collection('formSubmissions').add(submissionData);
  return docRef.id;
};
```

### Reading from Firestore (Admin Panel)

If you plan to build an admin panel to view submissions, you can read from Firestore:

```typescript
// Get all form submissions, sorted by timestamp (newest first)
export const getFormSubmissions = async (): Promise<any[]> => {
  const db = admin.firestore();
  
  const snapshot = await db.collection('formSubmissions')
    .orderBy('timestamp', 'desc')
    .get();
  
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

// Get a single form submission by ID
export const getFormSubmissionById = async (id: string): Promise<any> => {
  const db = admin.firestore();
  
  const doc = await db.collection('formSubmissions').doc(id).get();
  
  if (!doc.exists) {
    throw new Error('Submission not found');
  }
  
  return {
    id: doc.id,
    ...doc.data()
  };
};
```

## Data Management

### Data Retention

Consider implementing a data retention policy for form submissions:

1. **Automatic Deletion**: Use Cloud Functions to automatically delete old submissions
2. **Export and Archive**: Export old submissions to Cloud Storage before deletion
3. **Compliance**: Ensure your retention policy complies with relevant regulations (GDPR, CCPA, etc.)

Example Cloud Function for automatic deletion (runs on a schedule):

```typescript
export const cleanupOldSubmissions = functions.pubsub
  .schedule('every 24 hours')
  .onRun(async () => {
    const db = admin.firestore();
    
    // Calculate date threshold (e.g., 90 days ago)
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - 90);
    const cutoffTimestamp = admin.firestore.Timestamp.fromDate(cutoffDate);
    
    // Query for old submissions
    const snapshot = await db.collection('formSubmissions')
      .where('timestamp', '<', cutoffTimestamp)
      .get();
    
    // Delete old submissions
    const batch = db.batch();
    snapshot.docs.forEach(doc => {
      batch.delete(doc.ref);
    });
    
    await batch.commit();
    
    console.log(`Deleted ${snapshot.size} old submissions`);
    return null;
  });
```

### Backup Strategy

Regularly back up your Firestore data:

1. **Export to Cloud Storage**: Use the Firebase CLI or Google Cloud Console
2. **Scheduled Exports**: Set up scheduled exports using Cloud Scheduler and Cloud Functions
3. **Restore Testing**: Periodically test restoring from backups

Example command for manual export:

```bash
gcloud firestore export gs://[BUCKET_NAME]/[BACKUP_FOLDER]
```

## Monitoring and Alerts

### Set Up Monitoring

1. Go to the Firebase Console > Project Overview > Project Settings > Integrations
2. Enable Google Cloud Monitoring
3. Set up alerts for:
   - High read/write operations
   - Quota usage
   - Error rates

### Cost Management

Monitor and optimize Firestore costs:

1. **Indexes**: Only create necessary indexes
2. **Query Efficiency**: Design queries to minimize read operations
3. **Batch Operations**: Use batch writes for multiple operations
4. **Document Size**: Keep document size small (avoid storing large blobs)
5. **Budget Alerts**: Set up budget alerts in Google Cloud Console

## Security Best Practices

### Data Protection

1. **Sensitive Data**: Consider encrypting sensitive fields before storing
2. **Field-Level Security**: Use security rules to restrict access to specific fields
3. **Input Validation**: Validate all data before storing in Firestore

### Authentication

1. **Service Account**: Use a dedicated service account for Cloud Functions
2. **Principle of Least Privilege**: Grant only necessary permissions
3. **Rotate Keys**: Regularly rotate service account keys

## Scaling Considerations

### Prepare for Growth

1. **Sharding**: For high-volume submissions, consider sharding by date or other criteria
2. **Caching**: Implement caching for frequently accessed data
3. **Rate Limiting**: Implement rate limiting in your API to prevent abuse

## Next Steps

1. Create the Firestore database in Firebase Console
2. Configure security rules
3. Implement the Cloud Function for saving form submissions
4. Test writing and reading from Firestore
5. Set up monitoring and alerts
6. Implement data retention and backup strategies