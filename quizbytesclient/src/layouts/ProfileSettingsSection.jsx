import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Card, Grid, Typography } from '@mui/material';

function ProfileSettingsSection() {
    return (
            <Card
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    backgroundColor: 'grey.dark',
                    p: '10px',
                    overflow: 'auto',
                    borderRadius: '8px',
                    alignItems: 'center',
                    textAlign: 'center',
                }}>
                <SectionTitle text='Settings' fontColor='white.main' />
                <Typography variant='h3' sx={{
                    color: 'white.main',
                    mt: '10px'
                }}>
                    Customization options are coming soon!
                </Typography>
            </Card>
    )
}

export default ProfileSettingsSection;