import { Box } from '@mui/material';
import React, { useState } from 'react'
import LogInForm from '../layouts/LogInForm';
import { auth, googleProvider } from '../firebase';
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate, useLocation } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


function LogIn() {
  const { setAuth } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('typing');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async () => {
    try {
      setStatus('submitting');
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth?.currentUser;

      if (user) {
        const token = await user.getIdToken();

        setAuth({ token: token, user: user });
        navigate(from, { replace: true });
      }
    } catch (error) {
      console.error(error);
      if (error.code === 'auth/wrong-password') {
        setStatus('invalid credentials');
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
      <LogInForm
        setEmail={setEmail}
        setPassword={setPassword}
        onSubmit={handleSubmit}
        onGoogleSignIn={handleGoogleLogin}
        status={status}
        setStatus={setStatus} />
    </Box>
  )
}

export default LogIn;