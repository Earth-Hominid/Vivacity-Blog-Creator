import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authenticationService from './authenticationService';

// Get user from local storage with JWT. Local storage only stores strings so parse first.

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const register = createAsyncThunk(
  'authentication/register',
  async (user, thunkAPI) => {
    try {
      return await authenticationService.register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

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
