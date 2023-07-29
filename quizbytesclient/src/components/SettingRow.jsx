import { Box } from '@mui/material';
import React from 'react';

function SettingRow({criteria, setting}) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
        }}>
            <Typography sx={{
                fontSize: '1rem',
                color: 'white.main',
            }}>
                {criteria}
            </Typography>
            {setting && setting}
        </Box>
    )
}

export default SettingRow;