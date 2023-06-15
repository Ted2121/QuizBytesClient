import React from 'react'
import QuizSelector from '../layouts/QuizSelector'
import Box from '@mui/material/Box'

function Quiz() {
    return (
        <Box
            sx={{
                position: 'relative',
                // minWidth: '100%',
                maxWidth: '90vw',
                top: '15vh',
                maxHeight: '60vh'
            }}
        >
            <QuizSelector />
        </Box>
    )
}

export default Quiz;