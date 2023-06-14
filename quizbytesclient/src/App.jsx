import { useState } from 'react'
import { ColorModeContext, useMode } from './theme';
import { Box, Button, CssBaseline, Grid, ThemeProvider } from '@mui/material';
import Navbar from './layouts/Navbar';
import Quiz from './pages/Quiz';
// import './App.css'

function App() {
  const [theme, colorMode] = useMode();
  const navbarHeight = '56px';

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Box
            sx={{
              display: 'flex',
              flex: 1,
              marginTop: navbarHeight,
              minHeight: '100%',
              minWidth: '100%',
              justifyContent: 'center'
            }}>
            <Quiz />
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;
