import React from 'react';
import RoadmapSectionTitle from '../components/RoadmapSectionTitle';
import { Box } from '@mui/material';
import RoadmapPlayerStats from '../components/RoadmapPlayerStats';
import RoadmapQuests from '../components/RoadmapQuests';
import RoadmapLeaderboard from '../components/RoadmapLeaderboard';

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
            <RoadmapQuests />
            <RoadmapLeaderboard />
        </Box>
    )
}

export default LeftSideRoadmap;