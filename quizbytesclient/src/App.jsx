import { useState } from 'react'
import { ColorModeContext, useMode } from './theme';
import { Box, Button, CssBaseline, Grid, ThemeProvider } from '@mui/material';
import Navbar from './layouts/Navbar';
import Quiz from './pages/Quiz';
import DecorativeCircle from './components/DecorativeCircle';
// import './App.css'

function App() {
  const [theme, colorMode] = useMode();
  const navbarHeight = '56px';
  const circleColor = "#f4c1b2";


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Box
            className='main'
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
          <DecorativeCircle
            color={circleColor}
            sx={{
              top: { xs: '15vh', sm: '60vh' },
              left: { xs: '-80vw', sm: '-40vw', md: '-30vw', lg: '-20vw', xxl: '-15vw' },
              height: { xs: '650px', sm: '800px', xl: '1000px', xxl: '1600px' },
              width: { xs: '650px', sm: '800px', xl: '1000px', xxl: '1600px' }
            }}
          />
          <DecorativeCircle
            color={circleColor}
            sx={{
              top: { sm: '-40vh', md: '-70vh', lg: '-50vh', xxl: '-30vh' },
              left: { sm: '40vw', md: '55vw', lg: '65vw', xl: '70vw', xxl: '70vw' },
              height: { xs: '650px', sm: '800px', xl: '1000px', xxl: '1600px' },
              width: { xs: '650px', sm: '800px', xl: '1000px', xxl: '1600px' },
              display: { xs: 'none', sm: 'block' },
            }} />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;
