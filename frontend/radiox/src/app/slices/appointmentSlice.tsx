// features/appointment/appointmentSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Doctor } from '../../components/Appointment/AppointCalendar/appointCalendar';

export interface AppointmentState {
  selectedCity: string;
  selectedDoctor: Doctor;
  selectedTimeSlot: string;
}

const initialState: AppointmentState = {
  selectedCity: "",
  selectedDoctor: {
    _id: "",
    name: "",
    specialty: "",
    timeSlots:[]
  },
  selectedTimeSlot: "",
};

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    setSelectedCity: (state, action: PayloadAction<string>) => {
      state.selectedCity = action.payload;
    },
    setSelectedDoctor: (state, action: PayloadAction<Doctor>) => {
      state.selectedDoctor = action.payload;
    },
    setSelectedTimeSlot: (state, action: PayloadAction<string>) => {
      state.selectedTimeSlot = action.payload;
    },
  },
});

export const { setSelectedCity, setSelectedDoctor, setSelectedTimeSlot } = appointmentSlice.actions;

export const selectAppointment = (state: RootState) => state.appointment;

export default appointmentSlice.reducer;