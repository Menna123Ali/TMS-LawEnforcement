import React, { useEffect } from 'react'
import { Autocomplete, TextField } from '@mui/material'
import { fieldToTextField } from 'formik-mui'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
const FormikAutocomplete = ({ textFieldProps, setChangeEvent, ...props }) => {
  const {
    form: { setTouched, setFieldValue, touched },
    label,
  } = props

  const { error, helperText, ...field } = fieldToTextField(props)
  const { name } = field

  // Commented for now
  // let idPropName = props.idPropName ? props.idPropName : idNameFromNAme
  // useEffect(() => {
  //   if (!(typeof props.field.value === 'object') && typeof props.field.value === 'number' && props.options?.length > 0 && typeof props.options[0] === 'object') {
  //     setFieldValue(name, props.options.filter((ele) => ele[idPropName] == props.field.value)[0])
  //   }
  // }, [props.options, props.field.value, setFieldValue, name, idPropName])

  return (
    <Autocomplete
      {...props}
      {...field}
      onChange={(_, value) => {
        setFieldValue(name, value)
        if (setChangeEvent) {
          setChangeEvent(value)
        }
      }}
      loading
      onBlur={(e) => setTouched({ ...touched, [name]: true })}
      renderInput={(props) => <TextField label={label} {...props} fullWidth variant="outlined" {...textFieldProps} helperText={helperText} error={error} />}
    />
  )
}

export default FormikAutocomplete
