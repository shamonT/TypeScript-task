import express from 'express';

import { authMiddleware } from '../../middlewares/authMiddleware';
import { addTask, getUserTasks, updateTask } from '../../controllers/taskFolder/taskController';


const router = express.Router();

// Routes for task management
router.post('/', authMiddleware, addTask);  // Admin creates a task
router.get('/:userId', authMiddleware, getUserTasks);  // Get tasks for a specific user
router.patch('/:taskId', authMiddleware, updateTask);  // Update task status (completed/approved)

export default router;
