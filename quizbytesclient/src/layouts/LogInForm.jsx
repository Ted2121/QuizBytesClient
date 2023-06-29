import React from 'react'
import { AccountCircle } from '@mui/icons-material';
import { Box, Button, Divider, InputAdornment, Paper, TextField } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';


function LogInForm({ setEmail, setPassword, onSubmit, onGoogleLogin }) {
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
                onChange={(e) => {setEmail(e.target.value)}}
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
                type='password'
                onChange={(e) => {setPassword(e.target.value)}}
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
                }}
                variant="outlined" />
            <Box sx={{
                mt: '1rem',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Button
                    color='white'
                    variant='contained'
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
            <Button sx={{
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
                className="login-with-google-btn" onClick={onGoogleLogin} >
                Continue with Google
            </Button>
        </Paper>
    )
}

export default LogInForm;