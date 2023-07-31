import React, { useState } from 'react'
import SignUpForm from '../layouts/SignUpForm';
import { Box } from '@mui/material';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


function SignUp() {
  const { setAuth } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [status, setStatus] = useState('typing');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });

      const user = auth?.currentUser;

      if (user) {
        // Get the user's ID token
        const token = await user.getIdToken();

        // Set the user and token in the AuthContext
        setAuth({ token: token, user: user });

        navigate(from, { replace: true });
      }
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
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      if (user) {
        const token = await user.getIdToken();

        setAuth({ token: token, user: user });
        navigate(from, { replace: true });
      }
      console.log(auth?.currentUser?.displayName);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
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
        status={status}
        setStatus={setStatus}
      />
    </Box>
  )
}

export default SignUp;