"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../../controllers/userFolder/userController");
const authMiddleware_1 = require("../../middlewares/authMiddleware");
const router = express_1.default.Router();
// Admin-only routes
router.get('/', authMiddleware_1.authMiddleware, userController_1.getUsers); // Admin gets the list of users
router.delete('/:userId', authMiddleware_1.authMiddleware, userController_1.removeUser); // Admin deletes a user
exports.default = router;
