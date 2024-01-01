// FooterComponent.js
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const FooterComponent = () => {
  return (
    <Box sx={{ padding: '10px', backgroundColor: '#f0f0f0', borderTop: '1px solid #ccc', textAlign: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <WhatsAppIcon fontSize="medium" />
          <Typography variant="body2" sx={{ marginTop: '5px' }}>+123456789</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <InstagramIcon fontSize="medium" />
          <Typography variant="body2" sx={{ marginTop: '5px' }}>@instagram</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <FacebookIcon fontSize="medium" />
          <Typography variant="body2" sx={{ marginTop: '5px' }}>Facebook</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TwitterIcon fontSize="medium" />
          <Typography variant="body2" sx={{ marginTop: '5px' }}>@twitter</Typography>
        </Box>
        {/* Add more social media icons and information as needed */}
      </Box>
      <Typography variant="caption" sx={{ marginTop: '15px', marginBottom: '5px' }}> © 2023 7D Living All rights reserved.</Typography>
    </Box>
  );
};

export default FooterComponent;
