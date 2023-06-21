import { exec } from 'child_process';
import path from 'path';
import multer from 'multer';

// Configure multer storage
const storage = multer.diskStorage({
  destination: './public/uploads',
  filename: (req, file, cb) => {
     // cb(null, `${Date.now()}-${file.originalname}`);
      cb(null, `student_feedback.xlsx`);
      // cb(null, `${file.originalname}`);
    // cb(null, `${Date.now()}.csv`);
  },
});

// Create multer instance
const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false, // Disable built-in bodyParser
  },
};

export default async function handler(req, res) {
  try {
    await upload.single('file')(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        console.error(`Error uploading file: ${err}`);
        return res.status(400).json({ error: 'Bad Request' });
      } else if (err) {
        console.error(`Error uploading file: ${err}`);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      const pythonScriptPath = path.join(process.cwd(), 'src', 'pages', 'api', 'pythoncode.py');

      const pythonProcess = exec(`python ${pythonScriptPath}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing Python script: ${error}`);
          return res.status(500).json({ error: 'Internal Server Error' });
        }

        console.log(`${stdout}`);        
        res.status(200).json({ message: `${stdout}` });
      });
    });
  } catch (error) {
    console.error(`Error uploading file: ${error}`);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
   