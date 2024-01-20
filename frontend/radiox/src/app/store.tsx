// store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import appointmentReducer, { AppointmentState } from '../app/slices/appointmentSlice';
import slotAPIReducer, { SlotAPIState } from '../app/slices/slotAPISlice';
import userReducer, { UserState } from '../app/slices/userSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  appointment: appointmentReducer,
  slots: slotAPIReducer,
  user: userReducer, // Add the user slice reducer here
  // Add other slices here if needed
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
