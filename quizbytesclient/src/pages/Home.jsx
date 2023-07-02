import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import HomeQuiz from '../components/HomeQuiz';

function Home() {
  return (
    <Grid
      container
      spacing={2}
      columns={12}>
      <Grid
        item xs={12}
        lg={4}>
        <Typography
          variant='h1'>
          Programming Quizzes for Students by a Student
        </Typography>
        <Typography>
          And before you ask yourself whether you are
          a student or not, let me answer that for you
        </Typography>
        <Typography>
          Yes, you are!
        </Typography>
        <Typography>
          And I will prove it to you.
        </Typography>
      </Grid>
      <Grid
        item xs={12}
        lg={4}
        sx={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center'
        }}>
<HomeQuiz />
      </Grid>
      <Grid
        item xs={12}
        lg={4}>

      </Grid>
    </Grid>
  )
}

export default Home;