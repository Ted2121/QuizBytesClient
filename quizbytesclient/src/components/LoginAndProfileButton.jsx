import { IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
    

function LoginAndProfileButton({ linkTo }) {
    return (
        <Link to={linkTo} style={{ textDecoration: 'none', marginLeft: '25px' }}>
            <IconButton
                color='white'
                aria-label='log in'>
                <AccountCircleIcon fontSize='large' />
            </IconButton>
        </Link>
    )
}

export default LoginAndProfileButton;