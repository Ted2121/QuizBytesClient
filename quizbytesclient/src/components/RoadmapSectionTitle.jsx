import { Divider, Typography } from '@mui/material'
import React from 'react'

function RoadmapSectionTitle({ text, fontColor }) {
    fontColor = fontColor ? fontColor : 'black.main';

    return (
        <>
        <Typography
            sx={{
                fontSize: { xxs: '1.1rem', lg: '1.5rem' },
                fontWeight:'400',
                color: fontColor,
            }}>
            {text}
        </Typography>
        <Divider sx={{ width: '60%', backgroundColor: fontColor }} />
        </>
    )
}

export default RoadmapSectionTitle