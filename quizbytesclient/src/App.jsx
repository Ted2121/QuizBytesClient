import { useState } from 'react'
import { ColorModeContext, useMode } from './theme';
import { Button, CssBaseline, ThemeProvider } from '@mui/material';
import Navbar from './layouts/Navbar';
// import './App.css'

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
