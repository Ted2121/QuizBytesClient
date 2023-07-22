import React from 'react';
import RoadmapSectionTitle from './RoadmapSectionTitle';
import { Box, Card, Typography } from '@mui/material';

function RoadmapQuests() {
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
            <RoadmapSectionTitle text='Quests' fontColor='white.main' />
            <Typography variant='h3' sx={{
                color: 'white.main',
                mt: '10px'
            }}>
                Coming soon!
            </Typography>
        </Card>
    )
}

export default RoadmapQuests;