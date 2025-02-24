// Create web server with salesforce apex REST API
// 
// This script is a node.js script that uses the express.js framework and the
// nforce library to create a web server that exposes a REST API to interact
// with a Salesforce org. This script creates a web server that listens on
// port 3000 and exposes the following REST API:
// 
// GET /comments - Retrieves all comments
// POST /comments - Creates a new comment
// GET /comments/:id - Retrieves a specific comment
// PUT /comments/:id - Updates a specific comment
// DELETE /comments/:id - Deletes a specific comment
// 
// This script is a simple demonstration of how to create a REST API with
// node.js and express.js that interacts with Salesforce using the nforce
// library. This script is intended to be used in conjunction with the
// comments.html file and the comments.apxc file. The comments.html file is
// an HTML file that uses jQuery to make AJAX requests to the REST API created
// by this script. The comments.apxc file is an Apex REST class that is used
// in Salesforce to create a REST endpoint that can be accessed by this script.
// 
// This script is for demonstration purposes only and is not intended to be
// used in a production environment. It does not include any error handling
// or security features and is not designed to be scalable or performant. It
// is intended to be used as a learning tool to understand how to create a
// web server that interacts with Salesforce using the nforce library.
// 
// This script requires the express, nforce, body-parser, and morgan libraries.
// You can install these libraries by running the following command:
// 
// npm install express nforce body-parser morgan
// 
// You can run this script by executing the following command:
// 
// node comments.js
// 

// Import required libraries
const express = require('express');
const nforce = require('nforce');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Create a new express application
const app = express();

// Create a new nforce connection object
const org = nforce.createConnection({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI,
  environment: process.env.ENVIRONMENT,
  mode: 'single'
});

// Create middleware rest api