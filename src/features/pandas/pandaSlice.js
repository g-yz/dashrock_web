import { getPandas, postPandas } from './pandaAPI';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  pandaList: [],
  status: 'idle',
};

export const getPandasAsync = createAsyncThunk('pandas/get', async () => {
  const response = await getPandas();
  return response.data;
});

export const postPandasAsync = createAsyncThunk('pandas/post', async newPanda => {
  const response = await postPandas(newPanda);
  return response.data;
});

export const pandaSlice = createSlice({
  name: 'pandas',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getPandasAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(getPandasAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.pandaList = action.payload;
      })
      .addCase(postPandasAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(postPandasAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.pandaList.push(action.payload);
      });
  },
});

export const selectPandas = state => state.pandas.pandaList;
export default pandaSlice.reducer;
