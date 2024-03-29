import React, { useEffect, useRef, useState } from 'react'
import { AccountCircle } from '@mui/icons-material';
import { Button, Divider, Grid, InputAdornment, Paper, TextField, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import InfoTooltip from '../components/InfoTooltip';
import ValidationSymbols from '../components/ValidationSymbols';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function SignUpForm({
    email,
    setEmail,
    password,
    setPassword,
    displayName,
    setDisplayName,
    onSubmit,
    onGoogleSignIn,
    status,
    setStatus, }) {
    // must start with a letter.
    // must be between 5 and 18 characters
    const NAME_REGEX = /^[A-Za-z][A-Za-z0-9]{4,17}$/;
    // must contain atleast 1 lower-case letter, 1 upper-case letter and 1 symbol
    // must be between 6 and 20 characters
    const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,20}$/;
    // must be a valid email address
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const emailRef = useRef();

    const [validDisplayName, setValidDisplayName] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [passwordHidden, setPasswordHidden] = useState(true);

    const navigate = useNavigate();

    let errorMessage = null;

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        const result = NAME_REGEX.test(displayName);
        setValidDisplayName(result);
        // console.log(validDisplayName);
    }, [displayName]);

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        setValidEmail(result);
    }, [email]);

    useEffect(() => {
        const result = PASSWORD_REGEX.test(password);
        setValidPassword(result);
    }, [password]);

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        // we validate again to prevent JS tampering attacks
        const v1 = NAME_REGEX.test(displayName);
        const v3 = EMAIL_REGEX.test(email);
        const v2 = PASSWORD_REGEX.test(password);

        if (!v1 || !v2 || !v3) {
            // console.log("error")
            setStatus('incomplete');
            return;
        }

        setStatus('submitting');
        onSubmit();
    };

    useEffect(() => {
    }, [status, errorMessage]);

    function handleLoginClick() {
        navigate('/login');
    };

    function toggleVisibility() {
        setPasswordHidden(!passwordHidden);
    };

    switch (status) {
        case "error":
            errorMessage = "An error has occurred.";
            break;
        case "email error":
            errorMessage = "Email already exists.";
            break;
        case "incomplete":
            errorMessage = "Please fill in all fields.";
            break;
        default:
            errorMessage = null;
    }

    return (
        <Paper
            elevation={3}
            sx={{
                maxHeight: '80vh',
                height: 'auto',
                width: '90vw',
                minWidth: '276px',
                maxWidth: '400px',
                display: 'inline-flex',
                flexDirection: 'column',
                backgroundColor: '#FAFBFB'
            }}>
            <Grid
                container
                rowSpacing={2}
                columns={20}
                sx={{
                    margin: 0,
                    width: 'auto',
                    alignItems: 'center',
                    mb: 2,
                }}>
                {/* Display Name */}
                <Grid item xs={2} sx={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <ValidationSymbols
                        criteria={displayName}
                        validCriteria={validDisplayName} />
                </Grid>
                <Grid item xs={16} >
                    <TextField
                        id="name-input-field"
                        placeholder='Display Name'
                        onChange={(e) => {
                            setDisplayName(e.target.value);
                            setStatus('typing');
                        }}
                        sx={{

                            backgroundColor: 'white.main',
                            width: '100%'
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AssignmentIndIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined" />
                </Grid>
                <Grid item xs={2} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <InfoTooltip text='Must start with a letter.' />

                </Grid>
                <Grid item xs={20}>
                    <Divider
                        sx={{
                            ml: 2,
                            mr: 2
                        }}>
                        We don't disclose your email
                    </Divider>
                </Grid>
                {/* Email */}
                <Grid item xs={2} sx={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <ValidationSymbols
                        criteria={email}
                        validCriteria={validEmail} />
                </Grid>
                <Grid item xs={16}>
                    <TextField
                        id="email-input-field"
                        placeholder='Email'
                        inputRef={emailRef}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setStatus('typing');
                        }}
                        sx={{
                            backgroundColor: 'white.main',
                            width: '100%'
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            )
                        }}
                        variant="outlined" />
                </Grid>
                <Grid item xs={2} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <InfoTooltip text='Must be a valid email address.' />

                </Grid>
                {/* Password */}
                <Grid item xs={2} sx={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <ValidationSymbols
                        criteria={password}
                        validCriteria={validPassword} />
                </Grid>
                <Grid item xs={16}>
                    <TextField
                        id="password-input-field"
                        placeholder='Password'
                        type={passwordHidden ? 'password' : 'text'}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setStatus('typing');
                        }}
                        sx={{
                            backgroundColor: 'white.main',
                            width: '100%'
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
                </Grid>
                <Grid item xs={2} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <InfoTooltip text='Must contain atleast 1 lower-case letter, 1 upper-case letter and 1 symbol.' />
                </Grid>
                <Grid item xs={2} />
                <Grid
                    item xs={16}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }} >
                    <Button
                        color='white'
                        variant='contained'
                        onClick={handleLoginClick}
                        sx={{
                            '&:hover': {
                                backgroundColor: 'primary.main'
                            }
                        }}>
                        Log in
                    </Button>
                    <Button
                        color='white'
                        variant='contained'
                        onClick={handleOnSubmit}
                        disabled={status === 'submitting'}
                        sx={{
                            '&:hover': {
                                backgroundColor: 'secondary.main'
                            }
                        }}>
                        Sign up</Button>
                </Grid>
                <Grid item xs={2} />
                {/* {console.log(status)} */}
                {(
                    <Grid item xs={20} sx={{
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: 'center'
                    }}>
                        <Typography sx={{ color: 'error.main' }}>
                            {errorMessage}
                        </Typography>
                    </Grid>
                )}
                <Grid item xs={20}>
                    <Divider
                        sx={{
                            ml: 2,
                            mr: 2
                        }}>
                        Or
                    </Divider>
                </Grid>
                <Grid item xs={2} />
                <Grid item xs={16}>
                    <Button sx={{
                        textTransform: 'none',
                        fontSize: '0.8rem',
                        width: '100%',
                        color: '#757575',
                        minHeight: '2.5rem',
                        backgroundColor: 'white.main',
                        '&:hover': {
                            color: 'grey.dark',
                            backgroundColor: '#FAFBFB'
                        }
                    }}
                        className="login-with-google-btn" onClick={onGoogleSignIn} >
                        Continue with Google
                    </Button>
                </Grid>
                <Grid item xs={2} />

            </Grid>
        </Paper>
    )
}

export default SignUpForm;