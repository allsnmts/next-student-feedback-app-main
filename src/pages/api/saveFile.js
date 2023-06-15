const express = require("express");
const multer = require("multer");

const app = express();
const upload = multer({ dest: "uploads/" }); // Destination folder for uploaded files

app.post("/api/saveFile", upload.single("file"), (req, res) => {
  // Handle the uploaded file here
  const file = req.file;

  // Process the file or save it to the desired location
  // For example, you can move the file to the "uploads" folder:
  const filePath = "${file.filename}";
  fs.renameSync(file.path, filePath);

  res.json({ message: "File saved successfully" });
});

// Start the server
const port = 3001; // Replace with your desired port number
app.listen(port, () => {
  console.log("Server listening on port ${port}");
});
