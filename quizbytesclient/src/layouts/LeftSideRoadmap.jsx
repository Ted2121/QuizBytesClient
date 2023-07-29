import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Box } from '@mui/material';
import RoadmapPlayerStats from '../components/RoadmapPlayerStats';
import RoadmapQuests from '../components/RoadmapQuests';
import RoadmapLeaderboard from '../components/RoadmapLeaderboard';

function LeftSideRoadmap() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: '0px 20px',
            }}>
            <SectionTitle text='Road so far' />
            <Box sx={{
                mt: '20px',
                // p: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
            }}>
                <RoadmapPlayerStats userStats={null} />

            </Box>
            <Box sx={{
                mt: '20px',
                // p: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
            }}>
                <RoadmapQuests />

            </Box>
            <Box sx={{
                mt: '20px',
                // p: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
            }}>
                <RoadmapLeaderboard />

            </Box>
        </Box>
    )
}

export default LeftSideRoadmap;