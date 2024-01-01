// AccordionMenu.js
import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionMenu = ({ title }) => {
  return (
    <Accordion sx={{ width: '275px' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {/* Add your accordion menu items here */}
        <Typography>
          <a href={`#${title}-menu1`}>Menu 1</a>
        </Typography>
        <Typography>
          <a href={`#${title}-menu2`}>Menu 2</a>
        </Typography>
        <Typography>
          <a href={`#${title}-menu3`}>Menu 3</a>
        </Typography>
        <Typography>
          <a href={`#${title}-menu4`}>Menu 4</a>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionMenu;
