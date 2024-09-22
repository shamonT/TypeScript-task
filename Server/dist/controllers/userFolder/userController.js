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
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUser = exports.getUsers = void 0;
const userService_1 = require("../../services/user/userService");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const adminId = (_b = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : ''; // Assuming user info is in req.user from the auth middleware
    try {
        const users = yield (0, userService_1.getAllUsers)(adminId);
        res.json(users);
    }
    catch (err) {
        res.status(500).json({ error: 'Error fetching users' });
    }
});
exports.getUsers = getUsers;
const removeUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        yield (0, userService_1.deleteUser)(userId);
        res.status(204).send();
    }
    catch (err) {
        res.status(500).json({ error: 'Error deleting user' });
    }
});
exports.removeUser = removeUser;
