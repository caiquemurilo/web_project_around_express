import { Router } from 'express';
import { getUsers, getUserById, createUser, updateProfile, updateAvatar } from '../controllers/users.js';


const router = Router();

router.get('/', getUsers);
router.post('/', createUser);
router.patch('/me', updateProfile)
router.patch('/me/avatar', updateAvatar)
router.get('/:id', getUserById);

export default router;
