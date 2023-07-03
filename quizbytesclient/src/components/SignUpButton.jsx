import { Button } from "@mui/material";
import { Link } from "react-router-dom";


function SignUpButton({marginLeft}) {
    return (
        <Link to='signup' style={{ textDecoration: 'none', marginLeft: marginLeft }}>
            <Button
                variant='outlined'
                color='white'
                sx={{ backgroundColor: 'grey.dark',
                '&:hover': {
                  color: 'secondary.main',
                  backgroundColor: 'grey.dark'
                },
                minWidth:'82px' }}>
                Sign Up
            </Button>
        </Link>
    );
}

export default SignUpButton;