import { Typography } from '@mui/material';
import React from 'react';

function PlayerStat({criteria, stat='n/a'}) {
  return (
    <Typography
    sx={{
        fontSize:'1rem',
        color:'white.main',

    }}>
        {`${criteria}: ${stat}`}
    </Typography>
  )
}

export default PlayerStat;