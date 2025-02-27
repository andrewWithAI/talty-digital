# Talty Digital LLC Website - Frontend Deployment Guide

This document provides a detailed guide for containerizing and deploying the Next.js frontend to Google Cloud Run.

## Containerization

### Dockerfile

Create a `Dockerfile` in the `frontend` directory:

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

### .dockerignore

Create a `.dockerignore` file in the `frontend` directory:

```
node_modules
.git
.github
.next
*.md
.env*
!.env.production
```

### Environment Variables

Create a `.env.production` file in the `frontend` directory:

```
# API URL for the form submission endpoint
NEXT_PUBLIC_FORM_API_URL=https://us-central1-talty-digital.cloudfunctions.net/submitForm
```

## Google Cloud Setup

### Prerequisites

1. Install Google Cloud SDK
2. Initialize Google Cloud SDK:
   ```bash
   gcloud init
   ```
3. Authenticate with Google Cloud:
   ```bash
   gcloud auth login
   ```
4. Set your project:
   ```bash
   gcloud config set project [PROJECT_ID]
   ```

### Enable Required APIs

```bash
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable artifactregistry.googleapis.com
```

## Deployment Process

### Build and Push Docker Image

```bash
# Navigate to frontend directory
cd frontend

# Build the Docker image
gcloud builds submit --tag gcr.io/[PROJECT_ID]/talty-digital-frontend
```

### Deploy to Cloud Run

```bash
gcloud run deploy talty-digital-frontend \
  --image gcr.io/[PROJECT_ID]/talty-digital-frontend \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --memory 512Mi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 10
```

## Configuration Options

### Memory and CPU

Adjust the memory and CPU allocation based on your application's needs:

```bash
--memory 512Mi  # Memory allocation (128Mi, 256Mi, 512Mi, 1Gi, 2Gi)
--cpu 1         # CPU allocation (1, 2, 4)
```

### Scaling

Configure the scaling behavior of your Cloud Run service:

```bash
--min-instances 0   # Minimum number of instances (can scale to zero)
--max-instances 10  # Maximum number of instances
```

### Environment Variables

Set environment variables for your Cloud Run service:

```bash
--set-env-vars="KEY1=VALUE1,KEY2=VALUE2"
```

Or use a file:

```bash
--env-vars-file=env.yaml
```

Where `env.yaml` contains:

```yaml
KEY1: VALUE1
KEY2: VALUE2
```

### Custom Domain

Map a custom domain to your Cloud Run service:

1. Verify domain ownership in Google Cloud Console
2. Map the domain to your service:
   ```bash
   gcloud beta run domain-mappings create \
     --service talty-digital-frontend \
     --domain www.taltydigital.com \
     --region us-central1
   ```
3. Update DNS records as instructed by Google Cloud

## Continuous Deployment

### Cloud Build Configuration

Create a `cloudbuild.yaml` file in the root directory:

```yaml
steps:
  # Build the container image
  - name: 'gcr.io/cloud-builders/docker'
    args: ['build', '-t', 'gcr.io/$PROJECT_ID/talty-digital-frontend', './frontend']
  
  # Push the container image to Container Registry
  - name: 'gcr.io/cloud-builders/docker'
    args: ['push', 'gcr.io/$PROJECT_ID/talty-digital-frontend']
  
  # Deploy container image to Cloud Run
  - name: 'gcr.io/google.com/cloudsdktool/cloud-sdk'
    entrypoint: gcloud
    args:
      - 'run'
      - 'deploy'
      - 'talty-digital-frontend'
      - '--image'
      - 'gcr.io/$PROJECT_ID/talty-digital-frontend'
      - '--region'
      - 'us-central1'
      - '--platform'
      - 'managed'
      - '--allow-unauthenticated'
      - '--memory'
      - '512Mi'
      - '--cpu'
      - '1'
      - '--min-instances'
      - '0'
      - '--max-instances'
      - '10'

images:
  - 'gcr.io/$PROJECT_ID/talty-digital-frontend'
```

### Set Up Cloud Build Trigger

1. Go to Cloud Build > Triggers in Google Cloud Console
2. Click "Create Trigger"
3. Connect your repository
4. Configure the trigger:
   - Name: `talty-digital-frontend-deploy`
   - Event: `Push to a branch`
   - Source: `^main$`
   - Configuration: `Cloud Build configuration file (yaml or json)`
   - Location: `Repository`
   - Cloud Build configuration file location: `cloudbuild.yaml`
5. Click "Create"

## Monitoring and Logging

### View Logs

```bash
gcloud logging read "resource.type=cloud_run_revision AND resource.labels.service_name=talty-digital-frontend" --limit 10
```

### Set Up Monitoring

1. Go to Cloud Run in Google Cloud Console
2. Select your service
3. Click on "Metrics" tab
4. View CPU, memory, and request metrics
5. Set up alerts for key metrics

## Cost Optimization

### Scaling to Zero

Ensure your service can scale to zero when not in use:

```bash
gcloud run services update talty-digital-frontend \
  --min-instances 0
```

### Concurrency

Increase the number of concurrent requests per instance:

```bash
gcloud run services update talty-digital-frontend \
  --concurrency 80
```

### CPU Allocation

Use CPU always allocated for consistent performance or CPU only allocated during request processing to reduce costs:

```bash
# For consistent performance
gcloud run services update talty-digital-frontend \
  --cpu-always-allocated

# For cost optimization
gcloud run services update talty-digital-frontend \
  --no-cpu-always-allocated
```

## Troubleshooting

### Container Startup Issues

If the container fails to start, check the logs:

```bash
gcloud logging read "resource.type=cloud_run_revision AND resource.labels.service_name=talty-digital-frontend AND severity>=ERROR" --limit 10
```

### Deployment Failures

If deployment fails, check the build logs:

```bash
gcloud builds list --filter="source.repoSource.repoName=talty-digital"
gcloud builds log [BUILD_ID]
```

### Performance Issues

If the service is slow, consider:
1. Increasing memory and CPU allocation
2. Optimizing the Next.js application
3. Implementing caching strategies
4. Using a CDN for static assets

## Next Steps

1. Create the Dockerfile and .dockerignore files
2. Set up environment variables
3. Build and test the Docker image locally
4. Deploy to Google Cloud Run
5. Set up continuous deployment
6. Configure monitoring and alerts
7. Optimize for performance and cost