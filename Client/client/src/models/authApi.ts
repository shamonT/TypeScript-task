import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Login user API call
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }: { email: string; password: string }) => {
    const response = await axios.post('/api/auth/login', { email, password });
    return {
      token: response.data.token,
      role: response.data.role, // 'admin' or 'user'
    };
  }
);

// Register user API call (this is the missing part)
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ firstName, lastName, email, password }: { firstName: string; lastName: string; email: string; password: string }) => {
    const response = await axios.post('/api/auth/register', {
      firstName,
      lastName,
      email,
      password,
    });
    return response.data;
  }
);
