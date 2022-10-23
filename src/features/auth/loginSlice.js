import { login, verify } from './loginAPI';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isInitialized: false,
  user: { is_internal_client: false },
  status: 'idle',
};

export const loginAsync = createAsyncThunk('auth/login', async credentials => {
  const response = await login(credentials);
  return response.data;
});

export const verifyCredentials = createAsyncThunk('auth/me', async () => {
  const response = await verify();
  return response.data;
});

export const loginSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      localStorage.removeItem('access_token');
      state.isInitialized = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        localStorage.setItem('access_token', action.payload.access_token);
        state.status = 'idle';
        state.isInitialized = true;
      })
      .addCase(verifyCredentials.pending, state => {
        state.status = 'loading';
      })
      .addCase(verifyCredentials.fulfilled, (state, action) => {
        state.status = 'idle';
        state.isInitialized = action?.payload?.is_active;
        state.user = action?.payload;
        // console.log(action.payload);
      });
  },
});

export const { logout } = loginSlice.actions;

export const selectIsInitialized = state => state.login.isInitialized;
export const selectIsInternalClient = state => state.login.user.is_internal_client;
export const selectUser = state => state.login.user;

export default loginSlice.reducer;
