import React, { useState } from 'react'
import SignUpForm from '../layouts/SignUpForm';
import { Box } from '@mui/material';
import { auth, googleProvider } from '../firebase';
import { signInWithRedirect, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [status, setStatus] = useState('typing');

  const handleSubmit = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });

      console.log(auth?.currentUser?.email);

    } catch (error) {
      console.error(error);
      if (error.code === 'auth/email-already-in-use') {
        console.log('email error');
        setStatus("email error")
      } else {
        setStatus("error")
      }
    }

    
  }

  const handleGoogleLogin = async () => {
    try {
      await signInWithRedirect(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  }

  console.log(auth?.currentUser?.displayName)
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
        status={status}
        setStatus={setStatus}
      />
    </Box>
  )
}

export default SignUp;