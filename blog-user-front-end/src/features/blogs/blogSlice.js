import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  blogs: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = blogSlice.actions;
export default blogSlice.reducer;
