// MainComponent.js
import React, { useState } from 'react';
import { Container } from '@mui/material';
import HeaderComponent from './HeaderComponent';
import RightDrawer from './RightDrawer';
import BodyComponent from './BodyComponent';
import FooterComponent from './FooterComponent';

const MainComponent = () => {
  const [open, setOpen] = useState(false);
  const drawerWidth = 240;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <RightDrawer open={open} handleDrawerClose={handleDrawerClose} drawerWidth={drawerWidth} /> */}
        {/* <HeaderComponent open={open} handleDrawerOpen={handleDrawerOpen} /> */}
        <BodyComponent />
        <FooterComponent />
    </div>
  );
};

export default MainComponent;
