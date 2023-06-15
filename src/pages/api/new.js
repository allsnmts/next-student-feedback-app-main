import formidable from "formidable";
import fs from "fs";
import path from "path";
import { exec } from "child_process";

export default function handler(req, res) {
  const form = formidable();

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }

    const file = files.file;
    const tempFilePath = file.path;
    const targetFilePath = path.join(process.cwd(), "uploads", file.name);
    console.log(process.cwd());
    // Move the uploaded file to a desired location
    fs.renameSync(tempFilePath, targetFilePath);

    const pythonScriptPath = path.join(
      process.cwd(),
      "src",
      "pages",
      "api",
      "sentiment_analysis.py"
    );

    const pythonProcess = exec(
      `python ${pythonScriptPath} ${targetFilePath}`, // Pass the file path as a command-line argument
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing Python script: ${error}`);
          return res.status(500).json({ error: "Internal server error" });
        }

        console.log(`Python script output: ${stdout}`);
        res
          .status(200)
          .json({ message: "Python script executed successfully" });
      }
    );
  });
}
