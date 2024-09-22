import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import authRoutes from './routes/authRoute/authRoutes';
import userRoutes from './routes/userRoute/userRoutes';
import taskRoutes from './routes/taskRoute/taskRoutes';

dotenv.config();

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // Parse incoming JSON data

// API routes
app.use('/api/auth', authRoutes);    // Authentication routes
app.use('/api/users', userRoutes);   // User management routes
app.use('/api/tasks', taskRoutes);   // Task management routes

const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
