// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux'; // Import Provider
import { store } from './app/store'; // Use named import for store
import "./App.css";
import Home from "./pages/home";
import LoginScreen from "./components/Home/Login/Login-Screen";
import ContactScreen from './components/Home/Contact/contact-us';
import SignUpPage from "./components/Home/SignUp/SignUpPage";
import PatientUI from "./components/Home/Patient/PatientUI";

function App() {
  return (
    <Provider store={store}> {/* Wrap App with Provider */}
      <Router>
        <div className="App">
          {/* Your header or navigation bar can go here if needed */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/contact" element={<ContactScreen />} /> 
            <Route path="/signup" element={<SignUpPage />} /> 
            <Route path="/patient" element={<PatientUI />} /> 
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
