import { styled } from '@mui/material'
import UserMenu from './UserMenu'

const StyledUserMenu = styled(UserMenu)(({ theme }) => ({
  display: 'flex',
  flex: '1',
  flexDirection: 'row',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
  // flexDirection: 'column',
  '& .cards': {
    display: 'flex',
    flexGrow: 1,
    padding: '5px 0px',
    listStyle: 'none',
    overflowX: 'auto',
    scrollSnapType: 'x mandatory',
    [theme.breakpoints.up('md')]: {
      maxWidth: '75%',
    },
  },
  '& .card': {
    display: 'flex',
    flexDirection: 'column',
    flex: ' 0 0 100%',
    padding: '0px',
    scrollSnapAlign: 'start',
    transition: 'all 0.2s',
    [theme.breakpoints.up('md')]: {
      flexBasis: 'calc(calc(100% / 5) - 15px)',
      '&:not(:last-child)': {
        marginRight: '17px',
      },
    },
    [theme.breakpoints.down('md')]: {
      flexBasis: 'calc(calc(100% / 3) - 20px)',
      '&:not(:last-child)': {
        marginRight: '30px',
      },
    },
    [theme.breakpoints.down('xs')]: {
      flexBasis: 'calc(50% - 5px)',
      '&:not(:last-child)': {
        marginRight: '10px',
      },
    },
  },
  '&  .favMenu': {
    flex: '1',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  '&  .favBTN': {
    minWidth: 'fit-content',
    fontWeight: 600,
    minHeight: '40px',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    border: `1px solid rgba(247,144,30, 0.2)`,
    '&:hover': {
      border: `1px solid rgba(247,144,30, 0.7)`,
      backgroundColor: theme.palette.primary.main,
      color: 'white',
    },
    '& .MuiButton-startIcon': {
      marginRight: '4px',
    },
    '& .material-icons': {
      color: 'white',
    },
    // [theme.breakpoints.up('md')]: {
    //   width: (window.innerWidth - 29) * 0.185,
    // },
    // [theme.breakpoints.down('sm')]: {
    //   width: (window.innerWidth - 29) * 0.323,
    //   fontSize: 10,
    // },
    [theme.breakpoints.down('xs')]: {
      fontSize: 10,
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
  order: '2',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '85vw',
  },
}))

export default StyledUserMenu
