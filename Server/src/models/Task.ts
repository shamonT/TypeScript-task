import  { model,Document, Schema, Types }  from 'mongoose';
// const mongoose=require("mongoose")
// const { Document, Schema }=require ("mongoose")

export interface ITask extends Document {
  title: string;
  dueDate: Date;
  userId: Types.ObjectId; // User assigned to the task
  completed: boolean;
  approved: boolean;
}

const taskSchema = new Schema({
  title: { type: String, required: true },
  dueDate: { type: Date, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  completed: { type: Boolean, default: false },
  approved: { type: Boolean, default: false },
});

export default model<ITask>('Task', taskSchema);
