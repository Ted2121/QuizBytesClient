import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import AnswerGroup from './AnswerGroup';

function BuiltQuiz({ data, onSubmit, startTime = null, width }) {


    const [activeStep, setActiveStep] = React.useState(0);
    const [quizState, setQuizState] = React.useState({
        elapsedTime: "",
        submittedAnswers: []
    });
    const theme = useTheme();
    const steps = data.questions;
    const maxSteps = steps.length;
    const currentQuestion = steps[activeStep];

    const [submittedAnswers, setSubmittedAnswers] = React.useState(
        data.questions.map((question) => ({
            questionId: question.id,
            selectedOptions: []
        }))
    );


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleOnSubmit = () => {
        const updatedQuizState = {
            ...quizState,
            elapsedTime: getCurrentTime(),
            submittedAnswers: submittedAnswers,
        };

        onSubmit(updatedQuizState);
    };

    const getCurrentTime = () => {
        if(startTime == null) {
            return "--:--"
        }

        const endTime = new Date();

        const elapsedTimeInMs = endTime - startTime;

        return formatElapsedTime(elapsedTimeInMs);
    };

    const formatElapsedTime = (elapsedTime) => {
        const totalSeconds = Math.floor(elapsedTime / 1000);
        const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
        const seconds = (totalSeconds % 60).toString().padStart(2, '0');
      
        return `${hours}:${minutes}:${seconds}`;
      };

    const stepperNextButton = (
        <Button
            variant='outlined'
            color='black'
            size="medium"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{
                fontSize: '1rem',
                '&:hover': {
                    backgroundColor: 'secondary.light'
                },
            }}
        >
            Next
            {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft fontSize='large' />
            ) : (
                <KeyboardArrowRight fontSize='large' />
            )}
        </Button>
    )

    const submitButton = (
        <Button color='black'
            variant='outlined'
            size="medium"
            onClick={handleOnSubmit}
            sx={{
                fontSize: '1rem',
                '&:hover': {
                    backgroundColor: 'secondary.light'
                },
            }}>
            Submit
        </Button>
    )

    const answers = (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {currentQuestion ? (
                <AnswerGroup question={currentQuestion} submittedAnswers={submittedAnswers} setSubmittedAnswers={setSubmittedAnswers} />
            ) : (
                <p>No possible answers available.</p>
            )}
        </Box>
    );

    return (
        <Paper
            elevation={5}
            sx={{
                width: width,
                height: 'auto',
                maxHeight: { xs: '83vh' },
                bgcolor: 'primary.main',
                overflow: 'hidden',
            }}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 'auto',
                    p: 2,

                }}>
                <Typography
                    variant='h4'
                    component='h4'>
                    {steps[activeStep].text}</Typography>
            </Paper>
            <Box
                sx={{
                    height: 'auto',
                    maxWidth: '100%',
                    p: 2,
                    maxHeight: '49vh',
                    overflow: 'auto',
                    borderTop: '1px solid black',
                    borderBottom: '1px solid black',
                }}>
                {answers}
            </Box>
            <MobileStepper
                variant="text"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    (activeStep === maxSteps - 1) ? submitButton : stepperNextButton
                }
                backButton={
                    <Button
                        color='black'
                        variant='outlined'
                        size="medium"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                        sx={{
                            fontSize: '1rem',
                            '&:hover': {
                                backgroundColor: 'secondary.light'
                            },
                        }}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight fontSize='large' />
                        ) : (
                            <KeyboardArrowLeft fontSize='large' />
                        )}
                        Back
                    </Button>
                } />
        </Paper>
    );
}

export default BuiltQuiz;