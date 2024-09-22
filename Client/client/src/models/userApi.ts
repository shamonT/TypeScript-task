// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchUsers = createAsyncThunk(
//   'user/fetchUsers',
//   async () => {
//     const response = await axios.get('/api/users');
//     return response.data;
//   }
// );

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchUsers = createAsyncThunk(
  'user/fetchUsers',
  async () => {
    const response = await axios.get('/api/users');
    return response.data;
  }
);

export default fetchUsers;