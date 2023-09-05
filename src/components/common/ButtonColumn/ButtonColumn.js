import React from 'react'
import Button from '@mui/material/Button'

const ButtonColumn = ({className, children}) => {

  return (
    <Button className={className} size="small">
      {children}
    </Button>
  )
}

export default ButtonColumn
