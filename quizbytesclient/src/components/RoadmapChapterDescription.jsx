import { Box, Button, Card, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function RoadmapChapterDescription({onStartQuizClick, cardElevation, description, difficultySetter }) {
  const elevation = cardElevation === null || cardElevation === undefined ? 1 : cardElevation;

  return (
    <Card 
    elevation={elevation}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      mt: '20px',
      backgroundColor: 'grey.dark',
      p: '10px',
      overflow: 'auto', 
      borderRadius: '8px',
    }}>
      <Typography sx={{
        fontSize: '1.2rem',
        color: 'white.main',

      }}>
        {description}
      </Typography>
      {difficultySetter}
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        mt: '20px'
      }}>
        <Link to='/learn' style={{ textDecoration: 'none' }}>
          <Button
            variant='outlined'>
            Learn
          </Button>
        </Link>
        <Button 
        variant='outlined'
        onClick={onStartQuizClick}>
          Start Quiz
        </Button>
      </Box>
    </Card>
  )
}

export default RoadmapChapterDescription;