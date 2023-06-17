import {React, useState} from 'react'
import BuiltQuiz from '../layouts/BuiltQuiz';
import demoQuiz from '../data/demoQuestions'
import { Box } from '@mui/material';

const data = demoQuiz;

function Demo() {
  

  const handleQuizSubmit = (data, quizState) => {
    // TODO submit logic
    // verify correct answers
    verifyQuizAnswers(quizState);
    // show the result screen with the corrected quiz
    console.log(quizState);
  }

  

  return (
    <Box sx={{display:'flex', alignItems:'center', overflow:'auto', }}>
      <BuiltQuiz data={data} onSubmit={handleQuizSubmit} />

    </Box>
  )
}

export default Demo;