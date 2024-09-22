import mongoose from 'mongoose';
import dotenv from 'dotenv';
// const mongoose=require("mongoose")
// const dotenv =require("dotenv")
dotenv.config();
const MONGO_URI="mongodb://localhost:27017"
 const connectDB = async () => {
    console.log("here")
  try {
    await mongoose.connect(MONGO_URI as string, {
   
    // useFindAndModify: false
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

export default connectDB;
