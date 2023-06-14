import { Box } from '@mui/material';
import React from 'react'

function DecorativeCircle({size, color, top, left, sx}) {
  return (
    <Box sx={{
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: color,
        position: 'fixed',
        top: top,
        left: left,
        zIndex: '-999',
        ...sx,
    }}>
    </Box>
  )
}

export default DecorativeCircle;