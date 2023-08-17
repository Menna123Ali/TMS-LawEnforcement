import React from 'react'
import { theme } from './assets/styles/theme'
import { ThemeProvider } from '@mui/material'
import Routes from './utils/routes'
import { Provider } from 'react-redux'
import store from './store/store'
import InactivityTimer from './components/common/InactivityTimer/InactivityTimer'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <InactivityTimer />
      <Provider store={store}>
        <Routes />
      </Provider>
    </ThemeProvider>
  )
}

export default App
