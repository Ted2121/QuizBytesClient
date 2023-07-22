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
      gap:2,
    }}>
<Typography variant='h1'>
This feature is coming soon!
</Typography>
<Typography variant='h1'>
In the meantime, feel free to try the demo
</Typography>
<TryDemoButton/>
    </Box>
  )
}

export default Learn;