import React, { useState } from 'react'
import { AccountCircle } from '@mui/icons-material';
import { Box, Button, Divider, InputAdornment, Paper, TextField, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function LogInForm({ setEmail, setPassword, onSubmit, onGoogleSignIn, status, setStatus }) {
    const navigate = useNavigate();
    const [passwordHidden, setPasswordHidden] = useState(true);
    let errorMessage = null;

    function toggleVisibility() {
        setPasswordHidden(!passwordHidden);
    };

    const handleSignupClick = () => {
        navigate('/signup');
    }

    switch (status) {
        case "error":
            errorMessage = "An error has occurred.";
            break;
        case "invalid credentials":
            errorMessage = "Invalid username or password";
            break;
        default:
            errorMessage = null;
    }

    return (
        <Paper
            elevation={3}
            sx={{
                maxHeight: '50vh',
                height: 'auto',
                width: '80vw',
                minWidth: '276px',
                maxWidth: '340px',
                display: 'inline-flex',
                flexDirection: 'column',
                p: '0 1rem',
                backgroundColor: '#FAFBFB'
            }}>
            <TextField
                id="email-input-field"
                placeholder='Email'
                onChange={(e) => { setEmail(e.target.value) }}
                sx={{
                    mt: '1rem',
                    backgroundColor: 'white.main'
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    ),
                }}
                variant="outlined" />
            <TextField
                id="password-input-field"
                placeholder='Password'
                type={passwordHidden ? 'password' : 'text'}
                onChange={(e) => { setPassword(e.target.value) }}
                sx={{
                    mt: '1rem',
                    backgroundColor: 'white.main'
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <LockIcon />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            {passwordHidden ?
                                <VisibilityIcon
                                    sx={{ cursor: 'pointer' }}
                                    onClick={toggleVisibility} />
                                :
                                <VisibilityOffIcon
                                    sx={{ cursor: 'pointer' }}
                                    onClick={toggleVisibility} />
                            }
                        </InputAdornment>
                    )
                }}
                variant="outlined" />
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
            }}>
                <Typography sx={{ color: 'error.main', mt: '5px' }}>
                    {errorMessage}
                </Typography>
            </Box>
            <Box sx={{
                mt: '1rem',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Button
                    color='white'
                    variant='contained'
                    onClick={handleSignupClick}
                    sx={{
                        '&:hover': {
                            backgroundColor: 'secondary.main'
                        }
                    }}>
                    Sign up</Button>
                <Button
                    color='white'
                    onClick={onSubmit}
                    variant='contained'
                    disabled={status === 'submitting'}
                    sx={{
                        '&:hover': {
                            backgroundColor: 'primary.main'
                        }
                    }}>
                    Log in</Button>
            </Box>
            <Divider sx={{
                mt: '1rem'
            }}>
                or
            </Divider>
            <Button
                sx={{
                    textTransform: 'none',
                    fontSize: '0.8rem',
                    color: '#757575',
                    m: '1rem 0',
                    minHeight: '2.5rem',
                    backgroundColor: 'white.main',
                    '&:hover': {
                        color: 'grey.dark',
                        backgroundColor: '#FAFBFB'
                    }
                }}
                className="login-with-google-btn" 
                onClick={onGoogleSignIn} >
                Continue with Google
            </Button>
        </Paper>
    )
}

export default LogInForm;