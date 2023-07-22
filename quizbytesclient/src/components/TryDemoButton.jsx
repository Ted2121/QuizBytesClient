import { Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

function TryDemoButton() {
    return (
        <Link to='/demo' style={{ textDecoration: 'none' }}>
            <Button
                variant='contained'
                sx={{ fontWeight: 600 }}>
                Try Demo
            </Button>
        </Link>
    )
}

export default TryDemoButton;