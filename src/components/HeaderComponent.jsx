// HeaderComponent.js
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assets/Logo.png'; // Replace with the actual path to your logo
import Grid from '@mui/material/Grid';
import AccordionMenu from './AccordionMenu'; // Import the AccordionMenu component

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const HeaderComponent = ({ props, open, handleDrawerOpen }) => {
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{ height: '125px', backgroundColor: '#fff', position: 'fixed' }}>
          <Toolbar sx={{ position: 'fixed'}}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <img src={Logo} alt="Logo" style={{ width: '70px', marginRight: '10px' }} />
              </Grid>
              <Grid item xs>
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#000',
                    fontSize: '38px',
                    fontFamily: 'Playfair Display',
                  }}
                  component="div"
                >
                  LIVING
                </Typography>
              </Grid>

              <Grid item >
                <IconButton
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerOpen}
                  sx={{ ...(open && { display: 'none' }) }}
                >
                  <MenuIcon style={{ color: '#000', marginLeft:'220px' }}  />
                </IconButton>
              </Grid>
              
              {/* Bottom Section: Accordions */}
              <Grid container spacing={3} xs={12} sx={{ marginTop: '-20px' }}>
                <Grid item sx={{  whiteSpace: 'nowrap' }}>
                    <AccordionMenu title="Personalized Diet Chart" />
                </Grid>
                <Grid item sx={{  whiteSpace: 'nowrap' }}>
                    <AccordionMenu title="Comprehensive Health Analysis" />
                </Grid>
                <Grid item sx={{whiteSpace: 'nowrap' }}>
                    <AccordionMenu title="Customized Performance Report" />
                </Grid>
                <Grid item sx={{  whiteSpace: 'nowrap' }}>
                    <AccordionMenu title="Expert Ayurvedic Doctor" />
                </Grid>
                </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      {/* Your additional content goes here */}
    </>
  );
};

export default HeaderComponent;
