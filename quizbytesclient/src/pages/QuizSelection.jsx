import React from 'react'
import QuizSelectionMenu from '../layouts/QuizSelectionMenu'
import Box from '@mui/material/Box'

function QuizSelection() {
    return (
        <Box
            sx={{
                position: 'relative',
                // minWidth: '100%',
                maxWidth: '90vw',
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