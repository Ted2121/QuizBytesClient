import { Box, Card, Divider, Typography } from '@mui/material';
import React from 'react';
import RoadmapSectionTitle from './RoadmapSectionTitle';
import PlayerStat from './PlayerStat';

function RoadmapPlayerStats({userStats}) {
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
            <RoadmapSectionTitle text='Stats' fontColor='white.main' />
            <Box sx={{
                mt:'10px'
            }}>
            <PlayerStat criteria='Total chapters completed' stat={userStats?.totalChapters}/>
            <PlayerStat criteria='Chapters competed this course' stat={userStats?.courseProgression?.count}/>
            <PlayerStat criteria='Total quizzes completed' stat={userStats?.totalQuizzes}/>
            <PlayerStat criteria='Quizzes completed this course' />
            <PlayerStat criteria='Total points earned' stat={userStats?.totalPoints}/>
            <PlayerStat criteria='Points left to spend' stat={userStats?.spendablePoints}/>
            </Box>
        </Card>
    )
}

export default RoadmapPlayerStats;