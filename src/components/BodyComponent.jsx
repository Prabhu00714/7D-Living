// BodyComponent.js
import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import image from '../assets/BackgroundImage.png';

const BodyComponent = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Grid container justifyContent="flex-end" alignItems="center" style={{ position: 'absolute', top: 15, right: 50, padding: '8px' }}>
        <Grid item>
          <Button color="tertiary" variant="filledTonal" style={{ marginRight: '8px' }}>
            HOME
          </Button>
        </Grid>
        <Grid item>
          <Button color="tertiary" variant="filledTonal" style={{ marginRight: '8px' }}>
            ABOUT US
          </Button>
        </Grid>
        <Grid item>
          <Button color="tertiary" variant="filledTonal">
            SERVICES
          </Button>
        </Grid>
      </Grid>

      <img
        src={image}
        alt="logo"
        style={{ width: '100%', height: 'auto', marginTop: '55px' }}
      />
    </div>
  );
};

export default BodyComponent;
