import { TextField } from '@mui/material'
import React from 'react'
import InputMask from 'react-input-mask'

const AppPhoneMask = ({ setFieldValue, name, label, ...props }) => {
  console.log('props', props)
  const onChange = (e) => {
    let value = e.target.value
    if (value !== undefined || value.length !== 0) {
      let str = value.replace(/[-]/g, '').trim()
      setFieldValue(name, str)
    }
  }
  return (
    <>
      <InputMask {...props} {...props.field} mask="+234-99999999999" maskChar={null} value={props.value} onChange={onChange}>
        {(inputProps) => <TextField name={name} label={label} {...inputProps} />}
      </InputMask>
    </>
  )
}

export default AppPhoneMask
