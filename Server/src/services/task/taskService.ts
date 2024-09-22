import Task, { ITask } from '../../models/Task';

 const createTask = async (title: string, dueDate: Date, userId: string) => {
  const task = new Task({ title, dueDate, userId });
  return task.save();
};

 const getTasksByUser = async (userId: string) => {
  return Task.find({ userId });
};

 const updateTaskStatus = async (taskId: string, status: { completed?: boolean; approved?: boolean }) => {
  return Task.findByIdAndUpdate(taskId, status, { new: true });
};


const taskService = {
  createTask,
  getTasksByUser,
  updateTaskStatus
};

export default taskService;