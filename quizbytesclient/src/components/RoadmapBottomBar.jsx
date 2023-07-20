import { Divider, Grid, IconButton, Paper } from '@mui/material';
import React from 'react';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GradeIcon from '@mui/icons-material/Grade';

function RoadmapBottomBar({onStatsToggleClick, onQuestsToggleClick, onLeaderboardToggleClick}) {
    return (
        <Paper
            sx={{
                display: 'flex',
                width: '100vw',
                height: '7vh',
                backgroundColor: 'grey.dark',
            }}>
            <Grid container columns={16} sx={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {/* Stats drawer toggle */}
                <Grid item xxs={5} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <IconButton onClick={onStatsToggleClick}>
                        <AutoGraphIcon sx={{
                            color: 'white.main',
                            fontSize: '2.5rem'
                        }} />
                    </IconButton>
                </Grid>
                <Divider orientation='vertical' color='white' sx={{ height: '60%' }} />
                {/* Quests drawer toggle */}
                <Grid item xxs={5} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <IconButton onClick={onQuestsToggleClick}>
                        <GradeIcon sx={{
                            color: 'white.main',
                            fontSize: '2.5rem'
                        }} />
                    </IconButton>
                </Grid>
                <Divider orientation='vertical' color='white' sx={{ height: '60%' }} />
                {/* Leaderboard drawer toggle */}
                <Grid item xxs={5} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <IconButton onClick={onLeaderboardToggleClick}>
                        <EmojiEventsIcon sx={{
                            color: 'white.main',
                            fontSize: '2.5rem'
                        }} />
                    </IconButton>
                </Grid>
            </Grid>


        </Paper>
    )
}

export default RoadmapBottomBar;