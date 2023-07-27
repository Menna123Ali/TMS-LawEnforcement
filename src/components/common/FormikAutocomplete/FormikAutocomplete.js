import React, { useEffect } from 'react'
import { Autocomplete, TextField } from '@mui/material'
import { fieldToTextField } from 'formik-mui'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
const FormikAutocomplete = ({ textFieldProps, ...props }) => {
  const {
    form: { setTouched, setFieldValue, touched },
    label,
  } = props
  const { error, helperText, ...field } = fieldToTextField(props)
  const { name } = field
  let idNameFromNAme = 'n' + capitalizeFirstLetter(name) + 'Id'
  let idPropName = props.idPropName ? props.idPropName : idNameFromNAme
  useEffect(() => {
    if (props.field.value === 0) {
    }
    if (!(typeof props.field.value === 'object') && typeof props.field.value === 'number' && props.options?.length > 0 && typeof props.options[0] === 'object') {
      setFieldValue(name, props.options.filter((ele) => ele[idPropName] == props.field.value)[0])
    }
  }, [props.options, props.field.value, setFieldValue, name, idPropName])
  return (
    <Autocomplete
      {...props}
      {...field}
      onChange={(_, value) => {
        if (value || value === 0) {
          setFieldValue(name, value)

          if (props.setChangeEvent) {
            props.setChangeEvent(value)
          }
        } else {
          setFieldValue(name, '')
          // props.setClearTableData([])
          if (name === '') {
            props.setClearTableData([])
          }
        }
      }}
      onBlur={(e) => setTouched({ ...touched, [name]: true })}
      renderInput={(props) => <TextField label={label} {...props} {...textFieldProps} helperText={helperText} error={error} />}
    />
  )
}

export default FormikAutocomplete
