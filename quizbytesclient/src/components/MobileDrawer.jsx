import React from 'react';
import { Box, Drawer } from '@mui/material';

function MobileDrawer({window, isOpen, onToggleClick, content}) {
    const xxsDrawerWidth = 240;
    const mobileDrawerWidth = 270;
    const tabletDrawerWidth = 370;
    const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Drawer 
    container={container}
    variant='temporary'
    open={isOpen}
    onClose={onToggleClick}
    ModalProps={{
      keepMounted: true,
    }}
    sx={{
      display: { xxs: 'block', md: 'none' },
      '& .MuiDrawer-paper': { 
        boxSizing: 'border-box', 
        width: {xxs:xxsDrawerWidth, xs:mobileDrawerWidth, sm:tabletDrawerWidth} },
    }}
    PaperProps={{
      sx: {
        backgroundColor: 'grey.dark',
      },
    }}>
      <Box sx={{
        mt:'65px',
        ml:'5px',
        mr:'5px'
      }}>
        {content}
      </Box>
    </Drawer>
  )
}

export default MobileDrawer;