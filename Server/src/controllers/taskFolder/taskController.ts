import { Request, Response } from 'express';
import taskService from 'src/services/task/taskService';
// import { createTask, getTasksByUser, updateTaskStatus } from '../../services/task/taskService';

 const addTask = async (req: Request, res: Response) => {
  const { title, dueDate, userId } = req.body;

  try {
    const task = await taskService.createTask(title, new Date(dueDate), userId);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: 'Error creating task' });
  }
};

 const getUserTasks = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const tasks = await taskService.getTasksByUser(userId);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching tasks' });
  }
};

 const updateTask = async (req: Request, res: Response) => {
  const { taskId } = req.params;
  const { completed, approved } = req.body;

  try {
    const updatedTask = await taskService.updateTaskStatus(taskId, { completed, approved });
    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: 'Error updating task' });
  }
};

const taskController = {
  addTask,
  getUserTasks,
  updateTask
};

export default taskController;

