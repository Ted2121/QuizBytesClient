import { Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

function LogInButton({ marginLeft }) {
  return (
    <Link to='login' style={{ textDecoration: 'none', marginLeft: marginLeft }}>
      <Button
        variant='outlined'
        color='white'
        sx={{
          backgroundColor: 'grey.dark',
          '&:hover': {
            color: 'secondary.main',
            backgroundColor: 'grey.dark'
          },
          minWidth:'74px'
        }}>
        Log In
      </Button>
    </Link>
  )
}

export default LogInButton;