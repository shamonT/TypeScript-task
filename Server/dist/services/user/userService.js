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
exports.deleteUser = exports.getUserById = exports.getAllUsers = void 0;
const User_1 = __importDefault(require("../../models/User"));
const getAllUsers = (adminId) => __awaiter(void 0, void 0, void 0, function* () {
    return User_1.default.find({ _id: { $ne: adminId }, role: 'user' }); // Admin can't see himself
});
exports.getAllUsers = getAllUsers;
const getUserById = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return User_1.default.findById(userId);
});
exports.getUserById = getUserById;
const deleteUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return User_1.default.findByIdAndDelete(userId);
});
exports.deleteUser = deleteUser;
