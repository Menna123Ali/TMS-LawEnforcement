import React from 'react'
import { Box, Typography } from '@mui/material'
// import { THEME_CONTATANS } from '../styles/constants'
import AppBreadcrumbs from './components/AppBreadcrumbs.styles'
// import { AppContext } from '../App'

const AppLayoutHeader = ({ className, title }) => {
  // const { appState } = useContext(AppContext)

  return (
    <Box className={className}>
      {/* <Icon style={{ color: THEME_CONTATANS.orange, position: 'absolute', right: '20px', fontSize: '50px' }}>{appState.pagePermissions.pageIconName}</Icon> */}

      <Typography variant="h4" className={'title'}>
        {title}
      </Typography>

      <AppBreadcrumbs />
    </Box>
  )
}

export default AppLayoutHeader
