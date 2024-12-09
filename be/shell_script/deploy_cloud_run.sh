#!/bin/bash

gcloud services enable artifactregistry.googleapis.com cloudbuild.googleapis.com run.googleapis.com

gcloud artifacts repositories create tugas-12-cc-kel-1 --repository-format=docker --location=asia-southeast2 --async

gcloud builds submit --tag asia-southeast2-docker.pkg.dev/tugas-12-cc-kel-1/tugas-12-cc-kel-1/tugas-12

gcloud run deploy --image asia-southeast2-docker.pkg.dev/tugas-12-cc-kel-1/tugas-12-cc-kel-1/tugas-12