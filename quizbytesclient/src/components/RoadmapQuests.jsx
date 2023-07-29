import React from 'react';
import SectionTitle from './SectionTitle';
import { Box, Card, Typography } from '@mui/material';

function RoadmapQuests({ cardElevation }) {
    const elevation = cardElevation === null || cardElevation === undefined ? 1 : cardElevation;

    return (
        <Card
            elevation={elevation}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                backgroundColor: 'grey.dark',
                p: '10px',
                overflow: 'auto',
                borderRadius: '8px',
                minHeight: '150px'
            }}>
            <SectionTitle text='Quests' fontColor='white.main' />
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