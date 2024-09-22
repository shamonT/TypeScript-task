import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

 const fetchTasks = createAsyncThunk(
  'task/fetchTasks',
  async (userId: string) => {
    const response = await axios.get(`/api/tasks/${userId}`);
    return response.data;
  }
);
export default fetchTasks