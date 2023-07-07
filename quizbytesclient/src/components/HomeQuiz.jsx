import { React, useState, useEffect } from 'react'
import BuiltQuiz from '../layouts/BuiltQuiz';
import homeQuiz from '../data/homeQuestions'
import { Divider, Typography } from '@mui/material';

function HomeQuiz() {
    const data = homeQuiz;
    const [submitted, setSubmitted] = useState(false);
    const [quiz, setQuiz] = useState(null);
    const [submitText, setSubmitText] = useState(null);

    useEffect(() => {
        if (quiz !== null) {
            // console.log(`quiz state updated: ${quiz}`);
            setSubmitted(true);
        }
    }, [quiz]);

    const handleQuizSubmit = (quizState) => {
        setQuiz(quizState);
        // verify
        if (quizState.submittedAnswers[0].selectedOptions.length === 1) {
            // console.log(`log submitted answer: ${quizState.submittedAnswers[0].selectedOptions[0]}`);
            switch (quizState.submittedAnswers[0].selectedOptions[0]) {
                case 'Yes.': setSubmitText('I expected nothing else from you. Welcome!  😄');
                    break;
                case 'Duh.': setSubmitText('I know...Silly question. Welcome!');
                    break;
                case 'Just one thing? You are funny.': setSubmitText('I know, right?');
                    break;
                case 'No.': setSubmitText('Then you must be here for that exact reason. Welcome, student! 😄');
                    break;
                default: return;
            }
            // console.log(submitText);
        } else if (quizState.submittedAnswers[0].selectedOptions.length === 0) {
            setSubmitText('You took the time to press Submit. That has to mean something. 😄');
        } else {
            setSubmitText('I like your enthusiasm. Welcome!');
        }
    };

    return (
        <>
        <Divider sx={{
            display:{xs:'block', lg:'none'}, 
            margin:'20px 0px', 
            width:'60%',
            backgroundColor:'black.main'}}/>
            <BuiltQuiz
                data={data}
                onSubmit={handleQuizSubmit}
                width={{ xs: '85vw', sm: '70vw', md: '55vw', lg: '31vw', xl: '31vw', xxl: '24vw' }} />
            {/* {console.log(submitText)} */}
            {(submitted &&
                <Typography 
                variant='h3'
                sx={{
                    mt:'20px',
                    textAlign:'center'
                }}>
                    {submitText}
                </Typography>)}
                <Divider sx={{
            display:{xs:'block', lg:'none'}, 
            margin:'20px 0px', 
            width:'60%',
            backgroundColor:'black.main'}}/>
        </>
    )
}

export default HomeQuiz;