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