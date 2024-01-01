// AccordionMenu.js
import React, { useState, useRef, useEffect } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionMenu = ({ title }) => {
  const [open, setOpen] = useState(false);
  const accordionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let fontSize = '18px'; // Default font size

      if (screenWidth <= 600) {
        fontSize = '14px'; // Adjust the font size for smaller screens
      }

      // Update the font size dynamically
      accordionRef.current.style.fontSize = fontSize;
    };

    // Attach the resize event listener
    window.addEventListener('resize', handleResize);

    // Initial font size setup
    handleResize();

    return () => {
      // Remove the resize event listener on component unmount
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleAccordionClick = () => {
    setOpen(!open);
  };

  return (
    <Accordion ref={accordionRef} expanded={open}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${title}-content`}
        id={`${title}-header`}
        onClick={handleAccordionClick}
        sx={{
          width: '100%',
          '&.Mui-expanded': {
            minHeight: '48px',
          },
        }}
      >
        <Typography
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            width: '100%',
          }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ width: '100%' }}>
        {/* ... (previous code) */}
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionMenu;
