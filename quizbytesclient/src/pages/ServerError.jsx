import { Box, Typography } from '@mui/material';
import React from 'react';
import TryDemoButton from '../components/TryDemoButton';

function ServerError() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '80vw',
            gap: 2,
            textAlign: 'center',
        }}>
            <Typography variant='h1'>
                Sadly the service you are looking for is currently unavailable due to lack of funds. 😔
            </Typography>
            <Typography variant='h3'>
                If you are interested in this content, please let me know at:{' '}
                <a href="mailto:teodor.andrei174@gmail.com">teodor.andrei174@gmail.com</a>
            </Typography>
            <Typography variant='h1'>
                In the meantime, feel free to
            </Typography>
            <TryDemoButton />
        </Box>
    )
}

export default ServerError;