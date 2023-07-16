import React from 'react';
import RoadmapSectionTitle from '../components/RoadmapSectionTitle';
import { Box } from '@mui/material';
import RoadmapPlayerStats from '../components/RoadmapPlayerStats';

function LeftSideRoadmap() {
    return (
        <Box 
        sx={{
            display:'flex',
            flexDirection:'column',
            // justifyContent: 'center',
            alignItems: 'center',
            p: '0px 20px',
            // mt:'20px'
        }}>
            <RoadmapSectionTitle text='Road so far'/>
            <RoadmapPlayerStats />
        </Box>
    )
}

export default LeftSideRoadmap;