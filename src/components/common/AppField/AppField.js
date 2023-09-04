import React from 'react'
import { Field } from 'formik'
import { TextField } from '@mui/material'

const AppField = ({ className, fullWidth = true, variant = 'outlined', label, size = 'large', name, children, ...props }) => {
  return (
    <Field as={TextField} name={name} label={label} variant={variant} fullWidth={fullWidth} className={className} {...props} size={size}>
      {children}
    </Field>
  )
}

export default AppField
