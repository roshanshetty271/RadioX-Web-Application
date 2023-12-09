// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import LoginScreen from "./components/Home/Login/Login-Screen"; // Update the path accordingly
import ContactScreen from './components/Home/Contact/contact-us';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Your header or navigation bar can go here if needed */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/contact" element={<ContactScreen />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
