import React from 'react';
import image from './assets/BackgroundImage.png';
import FooterComponent from './components/FooterComponent';

const App = () => {
  return (
    <div>
       <img
        src={image}
        alt="logo"
        style={{ width: '100%', height: 'auto',marginTop:'-1px' }}
      />
      <FooterComponent />
    </div>
  );
};

export default App;
