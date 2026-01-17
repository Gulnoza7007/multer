import { Router } from "express";
import multer from 'multer'
import { v4 as uuidv4 } from "uuid";
import fs from 'fs/promises'

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const jsonFile = path.join(__dirname, '../db/uploaded.json');


const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);   
      const name = Date.now() + ext;               
      cb(null, name);                               
    }
  });
  
const upload = multer({ storage });


const app = Router();



 app.post("/uploads", upload.single("file"),  async (req, res) => {
    if (!req.file) {
        return res.redirect("/?success=0");
      }
    let files = [];
      try {
        const data = await fs.readFile(jsonFile, "utf8");
        files = JSON.parse(data);
      } catch (err) {
        files = [];
      }
    
      files.push({
        id: uuidv4(),
        filename: req.file.originalname,
        storedName: req.file.filename,
        mimetype: req.file.mimetype
      });
    
      await fs.writeFile(jsonFile, JSON.stringify(files, null, 2));
    res.redirect('/?success=1')
 });

export default app;