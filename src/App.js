import React from 'react'
import { theme } from './assets/styles/theme'
import { ThemeProvider } from '@mui/material'
import Routes from './utils/routes'
import store from './store/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ThemeProvider>
  )
}

export default App
