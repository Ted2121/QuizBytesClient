import React from 'react';
import { Box, Grid } from '@mui/material';
import ProfileStatsSection from '../layouts/ProfileStatsSection';
import ProfileInformationSection from '../layouts/ProfileInformationSection';
import useAuth from '../hooks/useAuth';
import ProfileSettingsSection from '../layouts/ProfileSettingsSection';


function Profile() {
    const { auth } = useAuth();

    return (
        <Box rowGap={2} sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
            justifyContent: 'center',
            mt: '20px',
            mb: '20px'
        }}>
            {/* {console.log(auth)}; */}
            <ProfileInformationSection
                auth={auth}
                email={auth?.user?.email}
                displayName={auth?.user?.displayName} />
            <ProfileStatsSection />
            <ProfileSettingsSection />
        </Box>
    )
}

export default Profile;