import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux"; // Import Provider
import { store }  from "./app/store"; // Import your Redux store
import "./App.css";
import Home from "./pages/home";
import LoginScreen from "./components/Home/Login/Loginscreen";
import ContactScreen from './components/Home/Contact/contactus';
import SignUpPage from "./components/Home/SignUp/SignUpPage";
import PatientUI from "./components/Home/Patient/PatientUI";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<SignUpPage />} /> 
            <Route path="/contact" element={<ContactScreen />} /> 
            <Route path="/patient" element={<PatientUI />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
