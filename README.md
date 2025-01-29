# Public_API
## Table of Contents
- [Project Description](#project-description)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Pre-requisites](#pre-requisites)
  - [Installation](#installation)
- [API Documentation](#api-documentation)
  - [Endpoint](#endpoint)
  - [Error Handling](#error-handling)
- [Deployment](#deployment)
- [Backlinks](#backlinks)
- [Technologies Used](#technologies-used)
- [License](#license)

## Project Description
This is a simple API that provides responses in JSON format. The API returns:
- The registered email address used in the Slack workspace
- The current datetime in ISO 8601 format
- The GitHub URL of this project codebase

The API is built using Node.js and Express and is deployed to a publicly accessible endpoint.

## Features
- Supports GET requests
- Returns response in JSON format
- Handles CORS (Cross-Origin Resource Sharing)
- Fast response time (<500ms)

## Getting Started

### Pre-requisites
- Node.js installed on your system

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Amaksss/public-api.git
   cd public-api
2. Install dependencies: npm install
3. Run the server: npm run start
By default, the server runs at:
http://localhost:4000/api/hng12

API Documentation
Endpoint
GET /api/hng12
Method: GET
Description: Access the API route
Response Format: Success (200 OK)
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/nzube-ctrl/public_api"
}

Error Handling
If an invalid route is requested, the API returns:

{
  "error": "page not found"
}

Deployment
The app is deployed at:
https://public-api-lvu5.onrender.com/api/hng12

Backlinks
Backlinks to:

https://hng.tech/hire/nodejs-developers

Technologies Used
Nodejs for Backend runtime
Expressjs for Web framework
CORS to handle cross origin requests
GitHub for Version Control

License
This project is available under the MIT License.