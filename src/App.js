import React from 'react';
import BackgroundImage from './assets/BackgroundImagePC.png';
import FooterComponent from './components/FooterComponent';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <img className="background-image" src={BackgroundImage} alt="Background"/>
      <FooterComponent />
    </div>
  );
}

export default App;
