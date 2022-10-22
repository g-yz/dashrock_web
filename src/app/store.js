import loginReducer from '../features/auth/loginSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});
