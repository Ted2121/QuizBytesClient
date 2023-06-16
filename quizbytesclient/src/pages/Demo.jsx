import React from 'react'
import BuiltQuiz from '../layouts/BuiltQuiz';
import demoQuiz from '../data/demoQuestions'
import { Box } from '@mui/material';

const data = demoQuiz;

function Demo() {
  return (
    <Box sx={{display:'flex', alignItems:'center'}}>
      <BuiltQuiz data={data} />

    </Box>
  )
}

export default Demo;