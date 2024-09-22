


import fetchTasks from '../models/taskApi';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { fetchTasks } from '../models/taskApi';

// Define the Task interface
export interface Task {
  id: string;
  title: string;
  dueDate: string;
  completed: boolean;
  approved: boolean;
}

// Initial state for the task slice
interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

// Create the task slice
const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    });
  },
});

export default taskSlice.reducer;
