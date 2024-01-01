import React from 'react';
import BackgroundImage from './assets/BackgroundImagePC.png';
import FooterComponent from './components/FooterComponent';
import './App.css'; // Import your CSS file

function App() {
  return (
    <div className="app-container">
      <img className="background-image" src={BackgroundImage} alt="Background"/>
      <FooterComponent />
    </div>
  );
}

export default App;
