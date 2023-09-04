import { Alert } from '@mui/material'
import React, { useEffect } from 'react'

export default function AppFlashMessage({ flashMessage, autoClose, autoCloseTime, onClose }) {
  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        onClose()
      }, autoCloseTime)

      return () => clearTimeout(timer)
    }
  }, [])
  // Types : error / warning / info / success
  return (
    <Alert elevation={6} variant="filled" onClose={onClose} severity={flashMessage.type} style={{ marginBottom: 10 }}>
      {flashMessage.message}
    </Alert>
  )
}
