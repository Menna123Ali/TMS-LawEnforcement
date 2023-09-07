import React from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import AppButton from '../AppButton/AppButton.styles'

const ErrorHandler = ({ className, errorMessage = 'Something went wrong', error, resetErrorBoundary }) => {
  return (
    <div className={className}>
      <ErrorOutlineIcon className="errorIcon" />
      <span className="errorText"> {errorMessage}</span>
      {/* <pre>{error.message}</pre> */}
      <span className="contactMessage"> Kindly contact your administrator</span>
      <AppButton variant="text" color="secondary" onClick={resetErrorBoundary} style={{ margin: 0 }}>
        Try again
      </AppButton>
    </div>
  )
}

export default ErrorHandler
