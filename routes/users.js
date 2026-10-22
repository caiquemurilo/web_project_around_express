import path from 'node:path';
import fsPromises from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { Router } from 'express';
import { getUsers, getUserById, createUser, updateProfile, updateAvatar } from '../controllers/users.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = Router();

router.get('/', getUsers);
router.post('/', createUser);
router.patch('/me', updateProfile)
router.patch('/me/avatar', updateAvatar)
router.get('/:id', getUserById);

export default router;
