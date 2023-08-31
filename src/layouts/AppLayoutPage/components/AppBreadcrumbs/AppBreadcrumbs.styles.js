import { styled } from '@mui/material'
import AppBreadcrumbs from './AppBreadcrumbs'

const StyledAppBreadcrumbs = styled(AppBreadcrumbs)(() => ({
  fontSize: '12px',
  color: 'white',
  '& .textCapitalize': {
    textTransform: 'capitalize',
    color: 'white',
    fontSize: '12px',
  },
  '& .pointer': {
    fontSize: '12px',
    color: 'white',
    textTransform: 'capitalize',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}))

export default StyledAppBreadcrumbs
