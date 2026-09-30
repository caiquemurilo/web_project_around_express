import path from 'node:path';
import fsPromises from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { Router } from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = Router();

router.get('/', async (req, res) => {
  try {
    const data = await fsPromises.readFile(path.join(__dirname, '..', 'data', 'users.json'), { encoding: 'utf-8' });
    const usersData = JSON.parse(data);
    res.json(usersData);
  } catch (err) {
    console.error('Error reading users.json:', err);
    res.status(500).send('Internal Server Error');
  }
});

export default router;