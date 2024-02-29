
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

import Starship from './Components/Starship';
import Details from './Components/Details';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Starship />} />
        <Route path="/starships/:id/" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;

