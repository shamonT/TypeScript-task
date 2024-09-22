"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const taskService_1 = __importDefault(require("src/services/task/taskService"));
// import { createTask, getTasksByUser, updateTaskStatus } from '../../services/task/taskService';
const addTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, dueDate, userId } = req.body;
    try {
        const task = yield taskService_1.default.createTask(title, new Date(dueDate), userId);
        res.status(201).json(task);
    }
    catch (err) {
        res.status(400).json({ error: 'Error creating task' });
    }
});
const getUserTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        const tasks = yield taskService_1.default.getTasksByUser(userId);
        res.json(tasks);
    }
    catch (err) {
        res.status(500).json({ error: 'Error fetching tasks' });
    }
});
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { taskId } = req.params;
    const { completed, approved } = req.body;
    try {
        const updatedTask = yield taskService_1.default.updateTaskStatus(taskId, { completed, approved });
        res.json(updatedTask);
    }
    catch (err) {
        res.status(500).json({ error: 'Error updating task' });
    }
});
const taskController = {
    addTask,
    getUserTasks,
    updateTask
};
exports.default = taskController;
