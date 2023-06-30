import { Box } from '@mui/material';
import React, { useState } from 'react'
import LogInForm from '../layouts/LogInForm';
import { auth, googleProvider } from '../firebase';
import { signInWithEmailAndPassword, signInWithRedirect } from 'firebase/auth';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

    } catch (error) {
      console.error(error);
    }
  }

  
  console.log(auth?.currentUser?.displayName)

  const handleGoogleLogin = async () => {
    try {
      await signInWithRedirect(auth, googleProvider);
      console.log(auth?.currentUser?.displayName)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Box sx={{
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex'
    }}>
      <LogInForm
        setEmail={setEmail}
        setPassword={setPassword}
        onSubmit={handleSubmit}
        onGoogleSignIn={handleGoogleLogin} />
    </Box>
  )
}

export default LogIn;