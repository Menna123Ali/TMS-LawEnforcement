import React from 'react'
import { Box, Typography } from '@mui/material'
import AppBreadcrumbs from '../AppBreadcrumbs/AppBreadcrumbs.styles'

const AppLayoutHeader = ({ className, title }) => {
  return (
    <Box className={className}>
      {/* <Icon className="pageIcon">{pagePermissions?.pageIcon?.iconName}</Icon> */}

      <Typography variant="h4" className={'title'}>
        {title}
      </Typography>

      <AppBreadcrumbs />
    </Box>
  )
}

export default AppLayoutHeader
