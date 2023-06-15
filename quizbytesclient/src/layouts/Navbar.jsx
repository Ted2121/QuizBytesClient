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
import { Link } from 'react-router-dom'

const drawerWidth = 240;
const navItems = [{
  id: '0',
  text: 'Quiz',
  route: 'select'
}];

const drawerItems = [
  {
    id: '0',
    text: 'Home',
    route: '/'
  },
  {
    id: '1',
    text: 'Quiz',
    route: '/'
  },
  {
    id: '2',
    text: 'Sign out',
    route: '/'
  },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const logo = (
    <Link to='/' style={{ textDecoration: 'none' }}>
      <picture style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src={Logo}
          alt="quizbytes"
          style={{ height: '100%', objectFit: 'contain', maxWidth: '130px' }}
        />
      </picture>
    </Link>
  );

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', }}>

      <Box sx={{ mt: '10px' }}>
        {logo}
      </Box>

      <Divider sx={{ backgroundColor: 'white.main' }} />
      <List>
        {drawerItems.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ mt: '8px' }}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText
                primaryTypographyProps={{ variant: 'h4', fontWeight: 500 }}
                primary={item.text}
                sx={{ color: 'white.text' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{ backgroundColor: "grey.dark" }}>
        <Toolbar
          sx={{ display: 'flex', justifyContent: "space-between" }}
          variant='regular'
        >
          <Box sx={{ display: 'flex' }}>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' }, }}
            >
              <MenuIcon
                fontSize='large'
                sx={{ color: "white.main" }} />
            </IconButton>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {logo}
            </Box>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Link key={item.id} to={item.route} style={{ textDecoration: 'none' }}>
                  <Button
                    variant="text"
                    key={item.id}
                    sx={{
                      color: "white.text",
                      fontSize: "large",
                      size: "large",
                      mt: "5px",
                      ml: "30px",
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
          
          <Box>
          <Link to='demo' style={{ textDecoration: 'none' }}>
              <Button
                variant='contained'
                sx={{fontWeight:600}}
              >
                Try Demo
              </Button>
            </Link>
            <Link to='signup' style={{ textDecoration: 'none', marginLeft:'25px' }}>
              <Button
                variant='outlined'
                color='white'
              >
                Sign Up
              </Button>
            </Link>
            <Link to='login' style={{ textDecoration: 'none' }}>
              <IconButton
                color="white"
                aria-label="log in"
                onClick={handleDrawerToggle}
                sx={{ ml: '25px' }}
              >
                <AccountCircleIcon fontSize="large" />
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
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