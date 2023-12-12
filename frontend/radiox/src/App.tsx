import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { indigo, pink } from '@mui/material/colors';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider
import { store } from './app/store'; // Use named import for store
import "./App.css";
import Home from "./pages/home";
import LoginScreen from "./components/Home/Login/Loginscreen";
import ContactScreen from './components/Home/Contact/contactus';
import SignUpPage from "./components/Home/SignUp/SignUpPage";
import PatientUI from "./components/Home/Patient/PatientUI";
import './App.css';
import DwvComponent from './DwvComponent';
import LandingPage from './pages/LandingPage';
import DoctorPortal from './pages/DoctorPortal';
import DwvPage from './pages/DwvPage';
import LoginPage from './pages/LoginPage';

export default function App() {
  

  return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/doctor" element={<DoctorPortal />} />
          <Route path="/dwv" element={<DwvComponent />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dwv/:doctorId/:patientId" element={<DwvPage />} />

        </Routes>
      </Router>
    
  );
}
