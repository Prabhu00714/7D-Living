// PersistentDrawerRight.js
import React from 'react';
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const DrawerHeader = ({ handleDrawerClose }) => (
  <Box display="flex" alignItems="center" padding={0} justifyContent="flex-start">
    <IconButton onClick={handleDrawerClose}>
      <ChevronRightIcon />
    </IconButton>
  </Box>
);

const PersistentDrawerRight = ({ open, handleDrawerClose, drawerWidth }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader handleDrawerClose={handleDrawerClose} />
        <List>
          {['Item 1', 'Item 2', 'Item 3', 'Item 4'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default PersistentDrawerRight;
