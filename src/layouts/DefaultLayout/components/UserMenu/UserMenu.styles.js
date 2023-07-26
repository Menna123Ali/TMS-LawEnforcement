import { styled } from '@mui/material'
import UserMenu from './UserMenu'

const StyledUserMenu = styled(UserMenu)(({ theme }) => ({
  display: 'flex',
  flex: '1',
  // flexDirection: 'column',
  '&  .favMenu': {
    flex: '1',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  '&  .favBTN': {
    fontSize: '12px',
    fontWeight: 600,
    marginRight: '2px',
    border: `1px solid rgba(247,144,30, 0.2)`,
    '&:hover': {
      border: `1px solid rgba(247,144,30, 0.7)`,
    },
    '& .MuiButton-startIcon': {
      marginRight: '4px',
    },
    '& .material-icons': {
      color: theme.palette.secondary.main,
    },
  },
  '&  .avatar': {
    background: theme.palette.primary.main,
    margin: '0 5px',
  },
  '&  .userText': {
    margin: '0 5px',
    textAlign: 'right',
  },
  '&  .userTitle': {
    fontSize: '0.9rem',
    textTransform: 'capitalize',
    fontWeight: '600',
  },
  '& .menuService': {
    color: '#707070',
    TextDecoder: 'underline',
  },
}))

export const UserMenuContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
}))

export default StyledUserMenu
