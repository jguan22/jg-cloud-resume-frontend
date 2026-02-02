# Cloud Resume Challenge - Frontend
This repository contains the frontend files (HTML, CSS, and JavaScript) for my Cloud Resume project. The site is hosted as a highly available, global website using **Amazon S3** and **Amazon CloudFront**.

---

## Frontend Architecture
The frontend is built to be "Serverless" and optimized for speed:

* **Amazon S3**: Hosts the static website files (index.html, style.css, etc.).

* **Amazon CloudFront**: Acts as a Content Delivery Network (CDN) to serve the site from edge locations globally.

* **JavaScript (Fetch API)**: Communicates with the backend API to retrieve and display the visitor count.

## CI/CD Pipeline
This repository uses GitHub Actions to automate the deployment process.

**How it works**:
Whenever a change is pushed to the main branch:
* **AWS Authentication**: GitHub logs into AWS using secure Repository Secrets.

* **S3 Sync**: The latest files are synced to the S3 bucket.

* **CloudFront Invalidation**: The CDN cache is cleared so that global users see the updates immediately instead of waiting for the cache to expire.

## Project Structure
This project uses the **AWS SAM CLI** to manage the lifecycle of this application.

* **index.html**: The core structure of the resume.

* **style.css**: Custom styling for a clean, modern look.

* **JavaScript(inline)**: JavaScript logic to call the backend Lambda function.

## Technical Highlights
* **HTTPS Everywhere**: Secured via CloudFront with an SSL/TLS certificate.

* **Cache Optimization**: Invalidation scripts ensure zero-downtime updates.

* **Responsive Design**: Styled to look great on both desktop and mobile devices.