import loginReducer from '../features/auth/loginSlice';
import pandaReducer from '../features/pandas/pandaSlice';
import catReducer from '../features/cats/catSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    pandas: pandaReducer,
    cats: catReducer,
  },
});
