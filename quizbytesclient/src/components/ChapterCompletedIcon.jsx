import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box } from '@mui/material';


function ChapterCompletedIcon() {
  return (
    <CheckCircleIcon
      sx={{
        fontSize: '5rem',
        color: 'primary.main',
      }} />
  )
}

export default ChapterCompletedIcon