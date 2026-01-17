import { Router } from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonFile = path.join(__dirname, '../db/uploaded.json');

const app = Router();

app.get('/view', async (req, res) => {
  let files;
  try {
    const data = await fs.readFile(jsonFile, "utf8");
    files = JSON.parse(data);
  } catch (err) {
    files = [];
  }

  res.render('view', {files})
});

export default app;