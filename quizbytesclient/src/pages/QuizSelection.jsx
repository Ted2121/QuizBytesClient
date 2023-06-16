import React from 'react'
import QuizSelectionMenu from '../layouts/QuizSelectionMenu'
import Box from '@mui/material/Box'

function QuizSelection() {
    return (
        <Box
            sx={{
                position: 'relative',
                maxWidth: '85vw',
                top: '15vh',
                height:'60vh',
                maxHeight: '60vh'
            }}
        >
            <QuizSelectionMenu />
        </Box>
    )
}

export default QuizSelection;