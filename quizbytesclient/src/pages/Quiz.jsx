import React from 'react'
import BuiltQuiz from '../layouts/BuiltQuiz';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { submitQuizAsync } from '../service/quizRequestsFacade';


function Quiz({ data }) {
  const navigate = useNavigate();
  const { auth } = useAuth();

  const startTime = new Date();

  async function handleSubmitQuiz(quiz) {
    try {
      await submitQuizAsync(quiz, auth?.token);

    } catch (error) {
      console.error(error);
      navigate('server-error');
    }
  }

  return (
    <>
      <BuiltQuiz
        data={data}
        onSubmit={handleSubmitQuiz}
        startTime={startTime}
        width={{ xs: '85vw', sm: '70vw', md: '55vw', lg: '45vw', xl: '38vw', xxl: '20vw' }} />
    </>
  )
}

export default Quiz;