import { getCats, postCats } from './catAPI';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  catList: [],
  status: 'idle',
};

export const getCatsAsync = createAsyncThunk('cats/get', async () => {
  const response = await getCats();
  return response.data;
});

export const postCatsAsync = createAsyncThunk('cats/post', async newCat => {
  const response = await postCats(newCat);
  return response.data;
});

export const catSlice = createSlice({
  name: 'cats',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCatsAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(getCatsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.catList = action.payload;
      })
      .addCase(postCatsAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(postCatsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.catList.push(action.payload);
      });
  },
});

export const selectCats = state => state.cats.catList;
export default catSlice.reducer;
