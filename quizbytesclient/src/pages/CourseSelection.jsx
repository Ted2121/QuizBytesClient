import React from 'react'
import CourseSelectionMenu from '../layouts/CourseSelectionMenu'
import Box from '@mui/material/Box'

function CourseSelection() {
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
            <CourseSelectionMenu />
        </Box>
    )
}

export default CourseSelection;