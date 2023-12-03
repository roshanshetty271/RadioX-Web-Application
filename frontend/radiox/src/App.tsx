import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
<<<<<<< HEAD


function App() {
  return (
    <Router>
      <div className="App">
        {/* Your header or navigation bar can go here if needed */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
=======

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
>>>>>>> 8768bbf884181d148a161c00f4233f943c4c96e8
  );
}

export default App;
