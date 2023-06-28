import { Box } from '@mui/material';
import React, {useState} from 'react'
import LogInForm from '../layouts/LogInForm';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <LogInForm 
      setEmail={setEmail} 
      setPassword={setPassword} 
      onSubmit={handleSubmit}
      onGoogleSignIn={handleGoogleLogin}/>
    </Box>
  )
}

export default LogIn;