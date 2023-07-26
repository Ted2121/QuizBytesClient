import { Box, Typography } from '@mui/material';
import React from 'react';
import TryDemoButton from '../components/TryDemoButton';

function Learn() {
  return (
    <Box sx={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      maxWidth:'80vw',
      gap:2,
      textAlign:'center',
    }}>
<Typography variant='h1'>
This feature is coming soon!
</Typography>
<Typography variant='h1'>
In the meantime, feel free to
</Typography>
<TryDemoButton/>
    </Box>
  )
}

export default Learn;