import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Answer from '../components/Answer';
import { FormGroup } from '@mui/material';

function BuiltQuiz({ data }) {
    const [activeStep, setActiveStep] = React.useState(0);
    const theme = useTheme();
    const steps = data.questions;
    const maxSteps = steps.length;


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const answers = (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {steps[activeStep].possibleAnswers ? (
                steps[activeStep].possibleAnswers.map((item, index) => (
                    <FormGroup key={index} >
                        <Answer label={item} />
                    </FormGroup>
                ))
            ) : (
                <p>No possible answers available.</p>
            )}
        </Box>
    );

    return (
        <Paper
            elevation={5}
            sx={{
                width: { xs: '85vw', sm: '70vw', md: '55vw', lg: '45vw', xl: '38vw', xxl: '20vw' },
                height: 'auto',
                maxHeight: { xs: '70vh' },
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

                }}
            >
                <Typography
                    variant='h4'
                    component='h4'
                >
                    {steps[activeStep].text}</Typography>
            </Paper>
            <Box
                sx={{
                    height: 'auto',
                    maxWidth: '100%',
                    p: 2,
                    maxHeight: '40vh',
                    overflow: 'auto'
                }}>
                {answers}
            </Box>
            <MobileStepper
                variant="text"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
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
                        }}
                    >
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight fontSize='large' />
                        ) : (
                            <KeyboardArrowLeft fontSize='large' />
                        )}
                        Back
                    </Button>
                }
            />
        </Paper>
    );
}

export default BuiltQuiz;