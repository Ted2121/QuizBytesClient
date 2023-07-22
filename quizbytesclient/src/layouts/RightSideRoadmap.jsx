import React from 'react';
import RoadmapSectionTitle from '../components/RoadmapSectionTitle';
import { Box } from '@mui/material';
import RoadmapChapterDescription from '../components/RoadmapChapterDescription';

function RightSideRoadmap({cardElevation, fontColor, openChapter}) {
  return (
    <Box 
    sx={{
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        p: '0px 20px',
    }}>
        <RoadmapSectionTitle fontColor={fontColor} text={openChapter?.title}/>
        <RoadmapChapterDescription elevation={cardElevation} description={openChapter?.description}/>
    </Box>
  )
}

export default RightSideRoadmap;