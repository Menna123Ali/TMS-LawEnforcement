import React from 'react'
import { Button } from '@mui/material'

const AppButton = ({ children, variant = 'contained', color = 'primary', type = 'button', className, size = 'large', ...props }) => {
  return (
    <Button className={className} type={type} variant={variant} color={color} size={size} {...props}>
      {children}
    </Button>
  )
}

export default AppButton
