import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logo from '../assets/Logo.png'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import DrawerButton from '../components/DrawerButton';
import SignUpButton from '../components/SignUpButton';
import TryDemoButton from '../components/TryDemoButton';

const drawerWidth = 240;
const navItems = [
  {
    id: '0',
    text: 'Courses',
    route: 'select'
  },
  {
    id: '1',
    text: 'Quiz',
    route: 'roadmap'
  },
  {
    id:'2',
    text: 'Learn',
    route: 'learn'
  },
];

const drawerItems = [
  {
    id: '0',
    text: 'Home',
    route: '/'
  },
  {
    id: '1',
    text: 'Courses',
    route: 'select'
  },
  {
    id: '2',
    text: 'Quiz',
    route: 'select'
  },
  {
    id: '3',
    text: 'Demo',
    route: 'demo'
  },
  {
    id:'4',
    text: 'Learn',
    route: 'learn'
  },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { auth, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleSignOut = () => {
    signOut();
    navigate(from, { replace: true });
  }

  const logo = (
    <Link to='/' style={{ textDecoration: 'none' }}>
      <picture style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src={Logo}
          alt='quizbytes'
          style={{ height: '100%', objectFit: 'contain', maxWidth: '130px' }}
        />
      </picture>
    </Link>
  );

  const signOutDrawerButton = (
    <DrawerButton id='signout' text='Sign out' onClick={handleSignOut} />
  );

  const signUpDrawerButton = (
    <Link to='signup' style={{ textDecoration: 'none' }}>
      <DrawerButton id='signup' text='Sign up' />
    </Link>
  );

  const signOutButton = (
    <Button
      variant='outlined'
      color='white'
      onClick={handleSignOut}>
      Sign Out
    </Button>
  );

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', }}>

      <Box sx={{ mt: '10px' }}>
        {logo}
      </Box>

      <Divider sx={{ backgroundColor: 'white.main' }} />
      <List>
        {drawerItems.map((item) => (
          <Link key={item.id} to={item.route} style={{ textDecoration: 'none' }}>
            <ListItem disablePadding sx={{ mt: '8px' }}>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText
                  primaryTypographyProps={{ variant: 'h4', fontWeight: 500 }}
                  primary={item.text}
                  sx={{ color: 'white.text' }} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        {auth?.token ? signOutDrawerButton : signUpDrawerButton}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component='nav' sx={{ backgroundColor: 'grey.dark' }}>
        <Toolbar
          sx={{ display: 'flex', justifyContent: 'space-between' }}
          variant='regular'>
          <Box sx={{ display: 'flex' }}>
            <IconButton
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' }, }}>
              <MenuIcon
                fontSize='large'
                sx={{ color: 'white.main' }} />
            </IconButton>
            <Box sx={{ display: { xxs: 'none', md: 'block' } }}>
              {logo}
            </Box>
            <Box sx={{ display: { xxs: 'none', md: 'block' } }}>
              {navItems.map((item) => (
                <Link key={item.id} to={item.route} style={{ textDecoration: 'none' }}>
                  <Button
                    variant='text'
                    key={item.id}
                    sx={{
                      color: 'white.text',
                      fontSize: 'large',
                      size: 'large',
                      mt: '5px',
                      ml: '30px',
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: 'grey.dark'
                      },
                    }}>
                    {item.text}
                  </Button>
                </Link>
              ))}
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <TryDemoButton />
              {/* TODO change the auth thing*/}
              {auth?.token ? signOutButton : <SignUpButton marginLeft='25px' />}
            </Box>
            <Link to='login' style={{ textDecoration: 'none', marginLeft: '25px' }}>
              <IconButton
                color='white'
                aria-label='log in'>
                <AccountCircleIcon fontSize='large' />
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        variant='temporary'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xxs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        PaperProps={{
          sx: {
            backgroundColor: 'grey.dark',
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default Navbar;