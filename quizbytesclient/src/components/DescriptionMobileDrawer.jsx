import React from 'react';
import { Box, Drawer } from '@mui/material';
import RightSideRoadmap from '../layouts/RightSideRoadmap';

function DescriptionMobileDrawer({window, openChapter, isDescriptionOpen, onDescriptionToggleClick}) {
    const drawerWidth = 270;
    const container = window !== undefined ? () => window().document.body : undefined;
    console.log(isDescriptionOpen);
  return (
    <Drawer 
    container={container}
    variant='temporary'
    open={isDescriptionOpen}
    onClose={onDescriptionToggleClick}
    ModalProps={{
      keepMounted: true,
    }}
    sx={{
      display: { xxs: 'block', md: 'none' },
      '& .MuiDrawer-paper': { 
        boxSizing: 'border-box', 
        width: drawerWidth, },
    }}
    PaperProps={{
      sx: {
        backgroundColor: 'grey.dark',
      },
    }}>
      <Box sx={{
        mt:'75px'
      }}>
        <RightSideRoadmap cardElevation='0' fontColor='white.main' openChapter={openChapter} />

      </Box>
    </Drawer>
  )
}

export default DescriptionMobileDrawer;