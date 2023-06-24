import { Paper, Typography } from '@mui/material';
import React from 'react'

function QuizResult({correctAnswers, wrongAnswers, elapsedTime}) {
    // console.log(clientSubmitTime);  
    // const trimmedTime = elapsedTime.slice(11, 19);
    
  return (
    <Paper 
    elevation={3}
    sx={{
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'center',
        maxWidth: '90%',
        p: 2
    }}>
        <Typography variant='h2' sx={{ textAlign: 'center' }}>
        Congrats! You made it to the finish line.
        </Typography>
        <Typography variant='h4' sx={{mt:1}}>
            Elapsed time:
        </Typography>
        <Typography variant='h3' sx={{mt:1}}>
           {elapsedTime}
        </Typography>
        <Typography variant='h4' sx={{mt:1}}>
            Correct answers:
        </Typography>
        <Typography variant='h3' sx={{mt:1}}>
            {correctAnswers}
        </Typography>
        <Typography variant='h4' sx={{mt:1}}>
            Wrong answers:
        </Typography>
        <Typography variant='h3' sx={{mt:1}}>
            {wrongAnswers}
        </Typography>
    </Paper>
  )
}

export default QuizResult;