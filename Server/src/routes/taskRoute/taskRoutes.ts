import express from 'express';

import { authMiddleware } from '../../middlewares/authMiddleware';
import taskController from '@controllers/taskFolder/taskController';
// import { addTask, getUserTasks, updateTask } from '../../controllers/taskFolder/taskController';


const router = express.Router();

// Routes for task management
router.post('/', authMiddleware, taskController.addTask);  // Admin creates a task
router.get('/:userId', authMiddleware, taskController.getUserTasks);  // Get tasks for a specific user
router.patch('/:taskId', authMiddleware, taskController.updateTask);  // Update task status (completed/approved)

export default router;
