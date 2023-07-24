// Create web server

// Import the Express.js module
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define the port number for your server to listen on
const port = 3000;

// Define a basic route that responds with "Hello, World!"
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
