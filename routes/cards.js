import path from 'node:path';
import fsPromises from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { Router } from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const data = await fsPromises.readFile(path.join(__dirname, '..', 'data', 'cards.json'), { encoding: 'utf-8' });
    const cards = JSON.parse(data);
    res.json(cards);
  } catch (err) {
    next(err);
  }
});

export default router;
