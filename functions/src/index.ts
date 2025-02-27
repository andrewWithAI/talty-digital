import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { submitFormHandler } from './submitForm';

// Initialize Firebase Admin
admin.initializeApp();

// Export the submitForm function
export const submitForm = functions.https.onRequest(submitFormHandler);