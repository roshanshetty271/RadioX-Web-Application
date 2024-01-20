// apiSlice.ts

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export interface SlotAPIState{
  data: {
    status: string,
    response: any
  },
  status: string,
  error: string
}

// Define an asynchronous thunk for making API calls
export const fetchSlots = createAsyncThunk('slots/fetchSlots', async (apiEndpoint: string) => {
  const response = await axios.get(apiEndpoint);
  return response.data;
});

// Create the API slice
const slotAPISlice = createSlice({
  name: 'slots',
  initialState: {
    data: {
      status: "",
      response: []
    },
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    // Handle the pending state when the API call is in progress
    builder.addCase(fetchSlots.pending, (state) => {
      state.status = 'loading';
    });

    // Handle the succeeded state when the API call is successful
    builder.addCase(fetchSlots.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
    });

    // Handle the failed state when the API call encounters an error
    builder.addCase(fetchSlots.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message ? action.error.message: "API Error";
    });
  },
});

// Export the async thunk for use in components

// Export the reducer
export default slotAPISlice.reducer;