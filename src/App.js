import React from 'react'
import { theme } from './assets/styles/theme'
import { ThemeProvider } from '@mui/material'
import Routes from './utils/routes'
import { Provider } from 'react-redux'
import store from './store/store'
import InactivityTimer from './components/common/InactivityTimer/InactivityTimer'
import FlashMessagePortal from './components/common/AppFlashMessage/FlashMessagePortal'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <InactivityTimer />
        <Routes />
        <FlashMessagePortal autoClose={true} autoCloseTime={5000} />
      </Provider>
    </ThemeProvider>
  )
}

export default App
