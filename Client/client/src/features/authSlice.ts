// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { loginUser } from '../models/authApi';

// interface AuthState {
//   token: string | null;
//   isLoggedIn: boolean;
//   role: 'admin' | 'user' | null; // Track role
// }

// const initialState: AuthState = {
//   token: null,
//   isLoggedIn: false,
//   role: null, // Start with no role
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     logout(state) {
//       state.token = null;
//       state.isLoggedIn = false;
//       state.role = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(loginUser.fulfilled, (state, action: PayloadAction<{ token: string, role: 'admin' | 'user' }>) => {
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//       state.role = action.payload.role; // Set user role upon login
//     });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginUser } from '../models/authApi';

interface AuthState {
  token: string | null;
  isLoggedIn: boolean;
  role: 'admin' | 'user' | null; // Track role
}

const initialState: AuthState = {
  token: null,
  isLoggedIn: false,
  role: null, // Start with no role
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      state.isLoggedIn = false;
      state.role = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action: PayloadAction<{ token: string, role: 'admin' | 'user' }>) => {
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.role = action.payload.role; // Set user role upon login
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
