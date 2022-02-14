import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { LandingPage } from './features/landingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LandingPage />
      </header>
    </div>
  );
}

export default App;
