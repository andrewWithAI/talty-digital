# Talty Digital LLC - Cloud Functions

This directory contains the Cloud Functions for the Talty Digital LLC website, including the form submission API.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up Firebase:
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase init functions
   ```
   
   When prompted, select:
   - Use an existing project (select your Firebase project)
   - JavaScript (or TypeScript if you prefer)
   - ESLint (yes)
   - Install dependencies (yes)

3. Build the functions:
   ```bash
   npm run build
   ```

## Local Development

To run the functions locally:

```bash
npm run serve
```

This will start the Firebase emulator suite, allowing you to test the functions locally.

## Deployment

To deploy the functions to Firebase:

```bash
npm run deploy
```

## Function URLs

After deployment, you can find the function URLs in the Firebase console or by running:

```bash
firebase functions:list
```

Use the URL for the `submitForm` function as the value for `NEXT_PUBLIC_FORM_API_URL` in your frontend environment variables.

## Structure

- `src/index.ts`: Main entry point that exports all functions
- `src/submitForm.ts`: Form submission handler
- `src/utils/validation.ts`: Form data validation utilities
- `src/utils/firestore.ts`: Firestore database utilities