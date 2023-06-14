// sentimentAnalysis.js

const express = require('express');
const app = express();

app.post('/sentiment-analysis', (req, res) => {
  // Run your sentiment analysis code here
  // This is where you can call the sentiment analysis.py code
  // You can use a Python library like 'child_process' to execute the Python code
  
  // Example code using child_process:
  const { spawn } = require('child_process');
  const pythonProcess = spawn('python', ['sentiment_analysis.py']);

  pythonProcess.stdout.on('data', (data) => {
    console.log(`Received data from Python: ${data}`);
    // You can send the result back to the client if needed
    res.send(data);
  });
  
  pythonProcess.stderr.on('data', (data) => {
    console.error(`Error received from Python: ${data}`);
    // Handle any errors that occur during the execution of the Python code
    res.status(500).send('An error occurred during sentiment analysis');
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
