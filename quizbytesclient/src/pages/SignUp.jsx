import React, { useState } from 'react'
import SignUpForm from '../layouts/SignUpForm';
import { Box } from '@mui/material';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const handleSubmit = () => {

  }

  const handleGoogleLogin = async () => {

  }

  return (
    <Box sx={{
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex'
    }}>
      <SignUpForm
        email={email}
        setEmail={setEmail}
        displayName={displayName}
        setDisplayName={setDisplayName}
        password={password}
        setPassword={setPassword}
        onSubmit={handleSubmit}
        onGoogleSignIn={handleGoogleLogin}
      />
    </Box>
  )
}

export default SignUp;