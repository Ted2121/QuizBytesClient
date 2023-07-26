import { Box, Typography } from '@mui/material';
import React from 'react'
import ExternalProfiles from '../components/ExternalProfiles';

function Footer() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection:'row',
      width: '100%',
      maxWidth:'100vw',
      overflow:'hidden',
      height: '50px',
      backgroundColor: 'grey.dark',
      justifyContent:'center',
      alignItems:'center',
      gap:'5px'
    }}>
      <Typography variant='h3' sx={{
        color:'white.main'
      }}>
        ©Teodor Andrei
      </Typography>
      <ExternalProfiles sx={{color:'white.main'}}/>
    </Box>
  )
}

export default Footer;