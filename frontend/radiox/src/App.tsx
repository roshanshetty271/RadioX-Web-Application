import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';


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
  );
}

export default App;
