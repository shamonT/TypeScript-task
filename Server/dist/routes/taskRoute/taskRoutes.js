"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../../middlewares/authMiddleware");
const taskController_1 = __importDefault(require("@controllers/taskFolder/taskController"));
// import { addTask, getUserTasks, updateTask } from '../../controllers/taskFolder/taskController';
const router = express_1.default.Router();
// Routes for task management
router.post('/', authMiddleware_1.authMiddleware, taskController_1.default.addTask); // Admin creates a task
router.get('/:userId', authMiddleware_1.authMiddleware, taskController_1.default.getUserTasks); // Get tasks for a specific user
router.patch('/:taskId', authMiddleware_1.authMiddleware, taskController_1.default.updateTask); // Update task status (completed/approved)
exports.default = router;
