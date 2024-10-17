import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Components/Main';
import Favorites from './Components/Favorites';
import Player from './Components/Player';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/player/:index" element={<Player />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
