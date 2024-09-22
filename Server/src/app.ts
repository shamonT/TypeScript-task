import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import authRoutes from './routes/authRoute/authRoutes';
import userRoutes from './routes/userRoute/userRoutes';
import taskRoutes from './routes/taskRoute/taskRoutes';
import mongoose from 'mongoose';
import { error } from 'console';

dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse incoming JSON data

// // API routes
// app.use('/api/auth', authRoutes);      // Authentication routes
// app.use('/api/users', userRoutes);    // User management routes
// app.use('/api/tasks', taskRoutes);    // Task management routes

// Connect to MongoDB and start the server
const PORT = process.env.PORT || 5000;
// connectDB().then(() => console.log("Connected")).catch(err => console.error(err));
// .then(() => {
//     console.log("Connected to MongoDB");
const MONGO_URI="mongodb://localhost:27017"
mongoose.Promise=Promise;
mongoose.connect(MONGO_URI);
mongoose.connection.on('error',error=>(console.log(error)))
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

  
    // connectDB().then(() => console.log("Connected")).catch(err => console.error(err));
// }).catch(err => {
//     console.error("Database connection error:", err);
// });

  

export default app;
