// app.js
const express = require('express');
const app = express();
const port = 3000;

// Define a GET endpoint at the path "/hello"
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, this is the GET response!' });
});
app.get('test get', (req,res) =>
{
  res.json({ message: 'Get response test' });
  
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Login system API
// Create Account System API
// Create a token that will be accepted for the current session
// IOT dashboard 