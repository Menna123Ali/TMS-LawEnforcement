import React from 'react'
import { theme } from './assets/styles/theme'
import { ThemeProvider } from '@mui/material'
import Routes from './utils/routes'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}

export default App
