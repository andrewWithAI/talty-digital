# Talty Digital LLC Website

This is the official website for Talty Digital LLC, a full-service web development and software engineering agency. The website showcases the company's services, expertise, and brand identity.

## Project Structure

The project is organized into the following directories:

- `frontend/`: Next.js frontend application
- `functions/`: Cloud Functions for serverless backend processing
- `memory-bank/`: Project documentation and architecture
- `docs/`: Additional documentation

## Technology Stack

- **Frontend**: Next.js (React-based) with server-side rendering and dynamic routing
- **UI Components**: Custom components built with Tailwind CSS
- **Backend**: Cloud Functions for serverless backend processing
- **Database**: Firestore for storing form submissions
- **Infrastructure**: Google Cloud Platform (Cloud Run, Cloud Functions, Firestore)

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm or yarn
- Firebase CLI (for deploying Cloud Functions)
- Google Cloud SDK (for deploying to Cloud Run)

### Frontend Development

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Cloud Functions Development

1. Install dependencies:
   ```bash
   cd functions
   npm install
   ```

2. Run the Firebase emulator:
   ```bash
   npm run serve
   ```

## Deployment

### Frontend Deployment to Cloud Run

1. Build the Docker image:
   ```bash
   cd frontend
   gcloud builds submit --tag gcr.io/[PROJECT_ID]/talty-digital-frontend
   ```

2. Deploy to Cloud Run:
   ```bash
   gcloud run deploy talty-digital-frontend \
     --image gcr.io/[PROJECT_ID]/talty-digital-frontend \
     --platform managed \
     --region us-central1 \
     --allow-unauthenticated
   ```

### Cloud Functions Deployment

1. Deploy the Cloud Functions:
   ```bash
   cd functions
   npm run build
   firebase deploy --only functions
   ```

### Continuous Deployment

The project includes a `cloudbuild.yaml` file for setting up continuous deployment with Google Cloud Build. To set up continuous deployment:

1. Connect your repository to Google Cloud Build
2. Create a trigger that uses the `cloudbuild.yaml` file
3. Push changes to the main branch to trigger a deployment

## Environment Variables

### Frontend Environment Variables

Create a `.env.local` file in the frontend directory with the following variables:

```
NEXT_PUBLIC_FORM_API_URL=http://localhost:5001/[PROJECT_ID]/us-central1/submitForm
```

For production, update the `.env.production` file with the actual Cloud Function URL.

## Project Documentation

The `memory-bank/` directory contains comprehensive documentation for the project:

- `productContext.md`: Project overview, goals, and context
- `activeContext.md`: Current session context and focus areas
- `progress.md`: Work completed and next steps
- `decisionLog.md`: Key decisions and their rationale
- `systemPatterns.md`: Architectural patterns and standards
- `directoryStructure.md`: Recommended directory structure
- `cloudDeploymentPlan.md`: Detailed plan for Google Cloud deployment
- `formSubmissionImplementation.md`: Guide for implementing form submissions
- `frontendDeploymentGuide.md`: Guide for deploying the frontend
- `firestoreSetupGuide.md`: Guide for setting up Firestore

## Features

- Responsive design for all device sizes
- Frosted glass navbar effect
- Animated components and transitions
- Services overview with detailed service pages
- Contact form with Cloud Function backend
- Dark mode support

## License

All rights reserved. This project is proprietary and confidential.
