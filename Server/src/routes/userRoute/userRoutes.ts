import express from 'express';
import { getUsers, removeUser } from '../../controllers/userFolder/userController';
import { authMiddleware } from '../../middlewares/authMiddleware';

const router = express.Router();

// Admin-only routes
router.get('/', authMiddleware, getUsers);  // Admin gets the list of users
router.delete('/:userId', authMiddleware, removeUser);  // Admin deletes a user

export default router;
