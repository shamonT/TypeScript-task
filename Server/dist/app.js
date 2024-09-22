"use strict";
// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import connectDB from './config/db';
// import authRoutes from './routes/authRoute/authRoutes';
// import userRoutes from './routes/userRoute/userRoutes';
// import taskRoutes from './routes/taskRoute/taskRoutes';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// dotenv.config();
// // Initialize Express app
// const app = express();
// // Connect to MongoDB
// // connectDB();
// const PORT = process.env.PORT || 5000;
// connectDB().then(() => {
//     console.log("here ");
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   }).catch(err => {
//     console.error("Database connection error:", err);
//   });
// // Middleware
// app.use(cors());
// app.use(express.json()); // Parse incoming JSON data
// // API routes
// app.use('/api/auth', authRoutes);    // Authentication routes
// app.use('/api/users', userRoutes);   // User management routes
// app.use('/api/tasks', taskRoutes);   // Task management routes
// // const PORT = process.env.PORT || 5000;
// // // Start the server
// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}`);
// // });
// export default app;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const authRoutes_1 = __importDefault(require("./routes/authRoute/authRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoute/userRoutes"));
const taskRoutes_1 = __importDefault(require("./routes/taskRoute/taskRoutes"));
dotenv_1.default.config();
// Initialize Express app
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json()); // Parse incoming JSON data
// API routes
app.use('/api/auth', authRoutes_1.default); // Authentication routes
app.use('/api/users', userRoutes_1.default); // User management routes
app.use('/api/tasks', taskRoutes_1.default); // Task management routes
// Connect to MongoDB and start the server
const PORT = process.env.PORT || 5000;
(0, db_1.default)().then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error("Database connection error:", err);
});
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});
exports.default = app;
