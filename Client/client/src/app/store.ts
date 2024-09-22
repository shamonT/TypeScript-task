
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
// import userReducer from '../features/userSlice';
import taskReducer from '../features/taskSlice';
import { userReducer } from '../features/userSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    task: taskReducer,
  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
