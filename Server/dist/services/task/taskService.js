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
const Task_1 = __importDefault(require("../../models/Task"));
const createTask = (title, dueDate, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const task = new Task_1.default({ title, dueDate, userId });
    return task.save();
});
const getTasksByUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return Task_1.default.find({ userId });
});
const updateTaskStatus = (taskId, status) => __awaiter(void 0, void 0, void 0, function* () {
    return Task_1.default.findByIdAndUpdate(taskId, status, { new: true });
});
const taskService = {
    createTask,
    getTasksByUser,
    updateTaskStatus
};
exports.default = taskService;
