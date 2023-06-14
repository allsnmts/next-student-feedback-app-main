const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
const port = 3000; // Set the desired port number

// Middleware
app.use(bodyParser.json());

// Route handler for "/run-python-code"
app.post("/run-python-code", (req, res) => {
  const { file } = req.body;

  // Perform the desired Python code execution here
  // You can replace the following code with the logic to execute the Python code

  // Simulating a response from Python code execution
  const responseData = { result: "Python code executed successfully" };
  res.json(responseData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
