import React from 'react'
import { theme } from './assets/styles/theme'
import { ThemeProvider } from '@mui/material'
import Routes from './utils/routes'
import { Provider } from 'react-redux'
import store from './store/store'
import InactivityTimer from './components/common/InactivityTimer/InactivityTimer'
import FlashMessagePortal from './components/common/AppFlashMessage/FlashMessagePortal'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorHandler from './components/common/ErrorHandler/ErrorHandler.styles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ErrorBoundary
          FallbackComponent={ErrorHandler}
          resetKeys={['someKey']}
          onReset={() => {
            // reloading the page to restore the initial state
            // of the current page

            window.location.reload()
          }}
        >
          <InactivityTimer />
          <Routes />
        </ErrorBoundary>
        <FlashMessagePortal autoClose={true} autoCloseTime={5000} />
      </Provider>
    </ThemeProvider>
  )
}

export default App
