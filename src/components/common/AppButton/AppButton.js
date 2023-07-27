import React from 'react'
import { Button } from '@mui/material'

const AppButton = ({ children, color = 'primary', type = 'submit', className, ...props }) => {
  return (
    <Button className={className} type={type} variant="contained" color={color} {...props}>
      {children}
    </Button>
  )
}

export default AppButton
