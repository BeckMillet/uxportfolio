import React from 'react';
import logo from './imgs/logo.png';
import { Home } from './pages/home';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="logo" alt="logo" />
        <p className="title">Beck Millet</p>
      </header>

      <Home />

    </div>
  );
}

export default App;
