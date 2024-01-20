import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { indigo, pink } from '@mui/material/colors';
import './App.css';
import AdminPortal from './pages/AdminPortal';
import DwvComponent from './DwvComponent';
import DoctorPortal from '../src/pages/DoctorPortal';
import DwvPage from '../src/pages/DwvPage';
import Home from './pages/home';
import LoginScreen from './components/Home/Login/Loginscreen';
import ContactScreen from './components/Home/Contact/contactus';
import SignUpPage from './components/Home/SignUp/SignUpPage';
import PatientUI from './components/Home/Patient/PatientUI';
import Appointment from './pages/appointment';
import Checkout from './pages/checkout';
import store, { persistor } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

export default function App() {

  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/admin/*" element={<AdminPortal />} />
            <Route path="/contact" element={<ContactScreen />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/contact" element={<ContactScreen />} />
            <Route path="/patient" element={<PatientUI />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/checkout" element={<Checkout/>}/>   
            <Route path="/doctor" element={<DoctorPortal />} />
              <Route path="/dwv" element={<DwvComponent />} />
              <Route path="/dwv/:doctorId/:patientId" element={<DwvPage />} />       
          </Routes>
        </div>
      </Router>
      </PersistGate>
  </Provider>
  );
}
