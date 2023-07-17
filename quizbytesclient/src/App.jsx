import { useState } from 'react'
import './styles/styles.css';
import { ColorModeContext, useMode } from './theme';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import Navbar from './layouts/Navbar';
import CourseSelection from './pages/CourseSelection';
import DecorativeCircle from './components/DecorativeCircle';
import { Route, Routes } from 'react-router-dom';
import RouteLayout from './components/RouteLayout';
import RequireAuth from './components/RequireAuth';
import Home from './pages/Home';
import Demo from './pages/Demo';
import Roadmap from './pages/Roadmap';
import Quiz from './pages/Quiz';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import { CourseProvider } from './context/CourseContext';
import Learn from './pages/Learn';

function App() {
  const [theme, colorMode] = useMode();
  const navbarHeight = '56px';
  const circleColor = '#f4c1b2';

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflow: 'auto', height: 'auto' }}>
          <Navbar />
          <Box
            className='main'
            sx={{
              display: 'flex',
              flex: 1,
              marginTop: navbarHeight,
              minHeight: '100%',
              minWidth: '100%',
              justifyContent: 'center',
              overflow: 'auto',
              height: 'auto'
            }}>
            <CourseProvider>
              <Routes>
                <Route path='/' element={<RouteLayout />}>
                  {/* public routes */}
                  <Route path='/' element={<Home />} />
                  <Route path='demo' element={<Demo />} />
                  <Route path='select' element={<CourseSelection />} />
                  <Route path='roadmap' element={<Roadmap />} />
                  <Route path='login' element={<LogIn />} />
                  <Route path='signup' element={<SignUp />} />
                  <Route path='learn' element={<Learn />} />

                  {/* private routes */}
                  <Route element={<RequireAuth />}>
                    <Route path='/quiz' element={<Quiz />} />
                  </Route>
                </Route>
              </Routes>
            </CourseProvider>

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
