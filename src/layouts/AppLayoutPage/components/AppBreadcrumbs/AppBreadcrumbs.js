import React from 'react'
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography, Box } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

const AppBreadcrumbs = ({className}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pathNames = pathname.split('/').filter((x) => x)

  return (
    <>
      {pathNames.length > 0 && (
        <Box px={0} mt={1}>
          <MUIBreadcrumbs aria-label="breadcrumb" className={className}>
            {pathNames.map((name, index) => {
              const routeTo = `/${pathNames.slice(0, index + 1).join('/')}`
              const isLast = index === pathNames.length - 1
              const nameUpdated = name.replace(/-/g, ' ')
              return isLast ? (
                <Typography key={name} className={'textCapitalize'}>
                  {nameUpdated}
                </Typography>
              ) : (
                <Link key={name} onClick={() => navigate(routeTo)} className={'pointer'}>
                  {nameUpdated}
                </Link>
              )
            })}
          </MUIBreadcrumbs>
        </Box>
      )}
    </>
  )
}


export default AppBreadcrumbs
