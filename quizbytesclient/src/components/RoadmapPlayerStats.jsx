import { Box, Card, Divider, Typography } from '@mui/material';
import React from 'react';
import RoadmapSectionTitle from './RoadmapSectionTitle';
import PlayerStat from './PlayerStat';

function RoadmapPlayerStats({ cardElevation, userStats }) {
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
                borderRadius: '8px'
            }}>
            <RoadmapSectionTitle text='Stats' fontColor='white.main' />
            <Box sx={{
                mt: '10px'
            }}>
                <PlayerStat criteria='Total chapters completed' stat={userStats?.totalChapters} />
                <PlayerStat criteria='Chapters competed this course' stat={userStats?.courseProgression?.count} />
                <PlayerStat criteria='Total quizzes completed' stat={userStats?.totalQuizzes} />
                <PlayerStat criteria='Quizzes completed this course' />
                <PlayerStat criteria='Total points earned' stat={userStats?.totalPoints} />
                <PlayerStat criteria='Points left to spend' stat={userStats?.spendablePoints} />
            </Box>
        </Card>
    )
}

export default RoadmapPlayerStats;