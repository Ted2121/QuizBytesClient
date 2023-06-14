import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logo from '../assets/Logo2.png'

const drawerWidth = 240;
const appBarHeight = 60;
const navItems = ['Quiz'];
const drawerItems = ['Home', 'Quiz', 'Sign out'];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const logo = (
    <picture style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img
        src={Logo}
        alt="quizbytes"
        style={{ height: '100%', objectFit: 'contain', maxWidth: '130px' }}
      />
    </picture>
  );

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', }}>
      <Box sx={{ mt: '10px' }}>
        {logo}
      </Box>
      <Divider sx={{ backgroundColor: 'white.main' }} />
      <List>
        {drawerItems.map((item) => (
          <ListItem key={item} disablePadding sx={{ mt: '8px' }}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primaryTypographyProps={{ variant: 'h4', fontWeight: 500 }} primary={item} sx={{ color: 'white.text' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <AppBar component="nav" sx={{ backgroundColor: "grey.dark"}}>
        <Toolbar 
        sx={{ display: 'flex', justifyContent: "space-between"}}
        variant='regular'
        >
          <Box sx={{ display: 'flex'}}>
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
                <Button
                  variant="text"
                  key={item}
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
                  {item}
                </Button>
              ))}
            </Box>
          </Box>
          <IconButton
            color="white"
            aria-label="sign in"
            onClick={handleDrawerToggle}
          >
            <AccountCircleIcon fontSize="large" />
          </IconButton>
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