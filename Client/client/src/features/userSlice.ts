// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { fetchUsers } from '../models/userApi';

// export interface User {
//   id: string;
//   firstName: string;
//   lastName: string;
//   email: string;
// }

// interface UserState {
//   users: User[];
// }

// const initialState: UserState = {
//   users: [],
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
//       state.users = action.payload;
//     });
//   },
// });

// export default userSlice.reducer;
// userSlice.ts
import fetchUsers from '../models/userApi';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { fetchUsers } from '../models/userApi';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    });
  },
});

export const userReducer = userSlice.reducer;
