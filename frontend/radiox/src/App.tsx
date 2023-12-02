import React from 'react';

import './App.css';
import Home from './pages/home';
import Stats from './components/stats-section/stats'

function App() {
  return (
    <div className="App">
      <Home/>
      <Stats/>
    </div>
  );
}

export default App;
