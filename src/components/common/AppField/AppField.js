import React from 'react'
import { Field } from 'formik'

const AppField = ({ className, fullWidth = true, variant = 'outlined', label, size = 'large', name, children, ...props }) => {
  return (
    <Field name={name} label={label} variant={variant} fullWidth={fullWidth} className={className} {...props} size={size}>
      {children}
    </Field>
  )
}

export default AppField
