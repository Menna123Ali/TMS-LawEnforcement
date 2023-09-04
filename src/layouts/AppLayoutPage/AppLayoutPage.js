import React from 'react'
import { Box } from '@mui/material'
import { shallowEqual, useSelector } from 'react-redux'
import AppLayoutHeader from './components/AppLayoutHeader/AppLayoutHeader.styles'

const AppLayoutPage = ({ className, title, children }) => {
  const state = useSelector((state) => {
    const { copyRight } = state.app
    return { copyRight }
  }, shallowEqual)

  return (
    <div className={className}>
      {title && <AppLayoutHeader title={title} />}

      <Box>{children && <div className={'content'}>{children}</div>}</Box>

      <div className={'copyright'}>{state.copyRight ? state.copyRight : 'Copyright © 2022-2023 DITECH Kano, Limited. All Rights Reserved.'}</div>
    </div>
  )
}

export default AppLayoutPage
