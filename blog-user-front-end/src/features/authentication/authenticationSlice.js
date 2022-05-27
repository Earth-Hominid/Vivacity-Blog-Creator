import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Get user from local storage with JWT. Local storage only stores strings so parse first.

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: () => {},
});

export const { reset } = authenticationSlice.actions;
export default authenticationSlice.reducer;
