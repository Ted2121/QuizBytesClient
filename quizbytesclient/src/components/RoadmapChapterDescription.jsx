import { Card, Typography } from '@mui/material';
import React from 'react';

function RoadmapChapterDescription({description}) {
  return (
    <Card sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        mt: '20px',
        backgroundColor: 'grey.dark',
        p: '10px',
        overflow: 'auto',
        borderRadius: '8px'
    }}>
        <Typography sx={{
        fontSize:'1.2rem',
        color:'white.main',

    }}>
            {description}
        </Typography>
    </Card>
  )
}

export default RoadmapChapterDescription;