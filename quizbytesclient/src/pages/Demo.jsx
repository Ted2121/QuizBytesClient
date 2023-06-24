import {React, useState, useEffect } from 'react'
import BuiltQuiz from '../layouts/BuiltQuiz';
import demoQuiz from '../data/demoQuestions'
import { Box } from '@mui/material';
import QuizResult from '../layouts/QuizResult';
import verifyQuizAnswers from '../service/demoQuizVerifier';


function Demo() {
  const data = demoQuiz;
  const startTime = new Date();

  const [submitted, setSubmitted] = useState(false);
  const [quiz, setQuiz] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  useEffect(() => {
    // This code will run when the `quiz` state changes from `null` to a non-null value
    if (quiz !== null) {
      // console.log(`quiz state updated: ${quiz}`);
      setSubmitted(true);
    }
  }, [quiz]);

  const handleQuizSubmit = (quizState) => {
    setQuiz(quizState);
    const { correctCount, wrongCount } = verifyQuizAnswers(data, quizState);
    // console.log(correctCount);
    // console.log(wrongAnswers);
    setCorrectAnswers(correctCount);
    setWrongAnswers(wrongCount);
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      overflow: 'auto', 
      justifyContent:'center' 
      }}>
      {submitted ? (
        <QuizResult
          correctAnswers={correctAnswers}
          wrongAnswers={wrongAnswers}
          elapsedTime={quiz.elapsedTime}
        />
      ) : (
        <BuiltQuiz data={data} onSubmit={handleQuizSubmit} startTime={startTime}/>
      )}
    </Box>
  );
}

export default Demo;