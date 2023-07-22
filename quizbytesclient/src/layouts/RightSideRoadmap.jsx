import React from 'react';
import RoadmapSectionTitle from '../components/RoadmapSectionTitle';
import { Box } from '@mui/material';
import RoadmapChapterDescription from '../components/RoadmapChapterDescription';

function RightSideRoadmap({paddingTop, cardElevation, fontColor, openChapter}) {
  const pt = paddingTop ? paddingTop : '0px';
  return (
    <Box 
    sx={{
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        p: '0px 20px',
        pt: pt
    }}>
        <RoadmapSectionTitle fontColor={fontColor} text={openChapter?.title}/>
        <RoadmapChapterDescription cardElevation={cardElevation} description={openChapter?.description}/>
    </Box>
  )
}

export default RightSideRoadmap;