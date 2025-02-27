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