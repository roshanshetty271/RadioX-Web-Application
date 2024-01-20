// userSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
interface UserStateProps {
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
  } as UserStateProps,
  reducers: {
    setUserData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUserData } = userSlice.actions;
export const selectUserData = (state: RootState) => state.user;

export default userSlice.reducer;
export type UserState = ReturnType<typeof userSlice.reducer>;
