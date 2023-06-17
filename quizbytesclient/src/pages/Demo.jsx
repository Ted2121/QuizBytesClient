import {React, useState} from 'react'
import BuiltQuiz from '../layouts/BuiltQuiz';
import demoQuiz from '../data/demoQuestions'
import { Box } from '@mui/material';

const data = demoQuiz;

function Demo() {
  const[quizState, setQuizState] = useState(null);

  const handleQuizSubmit = () => {
    // TODO submit logic
    // verify correct answers
    // show the result screen with the corrected quiz
  }

  const setDifficultyLevel = () => {
    // TODO set the difficulty level to that of the questions in data
    // call this method in the handleQuizSubmit method before verifying the correct answers
  }

  return (
    <Box sx={{display:'flex', alignItems:'center'}}>
      <BuiltQuiz data={data} onSubmit={handleQuizSubmit} setQuizState={setQuizState}/>

    </Box>
  )
}

export default Demo;