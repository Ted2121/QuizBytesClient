import React from 'react';
import RoadmapSectionTitle from '../components/RoadmapSectionTitle';
import { Box } from '@mui/material';

function RightSideRoadmap({openChapter}) {
  return (
    <Box 
    sx={{
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        p: '0px 20px',
    }}>
        <RoadmapSectionTitle text={openChapter?.title}/>
    </Box>
  )
}

export default RightSideRoadmap;