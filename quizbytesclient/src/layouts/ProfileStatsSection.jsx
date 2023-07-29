import { Grid } from '@mui/material';
import React from 'react';
import RoadmapQuests from '../components/RoadmapQuests';
import RoadmapPlayerStats from '../components/RoadmapPlayerStats';
import RoadmapLeaderboard from '../components/RoadmapLeaderboard';

function ProfileStatsSection() {
    return (
        <Grid container columns={13} gap={2} sx={{
            display:'flex',
            justifyContent:'space-between'
        }}>
            <Grid item xxs={13} md={4}>
                <RoadmapPlayerStats />
            </Grid>
            <Grid item xxs={13} md={4}>
                <RoadmapQuests />
            </Grid>
            <Grid item xxs={13} md={4}>
                <RoadmapLeaderboard />
            </Grid>
        </Grid>

    )
}

export default ProfileStatsSection;