// store.ts

import { configureStore, createSlice } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  dateOfBirth: string;
  phoneNumber: string;
  address: string;
  gender: string;
  symptoms: string;
  username: string;
  password: string;
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    dateOfBirth: '',
    phoneNumber: '',
    address: '',
    gender: '',
    symptoms: '',
    username: '',
    password: '',
  } as UserState,
  reducers: {
    setUserData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUserData } = userSlice.actions;
export const selectUserData = (state: RootState) => state.user;

const rootReducer = {
  user: userSlice.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
