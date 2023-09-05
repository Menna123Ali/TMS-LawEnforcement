import { styled } from '@mui/material'
import UserMenu from './UserMenu'

const StyledUserMenu = styled(UserMenu)(({ theme }) => ({
  display: 'flex',
  flex: '1',
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: 'auto',
  
  [theme.breakpoints.down('md')]: {
    display: 'block',
    maxWidth: '96%'
  },
  '& .notification-btn':{
    paddingRight: 0
  },
  '& .cards-container': {
    [theme.breakpoints.up('md')]: {
    maxWidth: '60%'
    },
  },

  '& .cards': {
    display: 'flex',
    flexGrow: 1,
    gap: '16px',
    padding: '5px 0px',
    listStyle: 'none',
    overflowX: 'auto',
    maxWidth: '100%',
    scrollSnapType: 'x mandatory',
  },
  '& .card': {
    display: 'flex',
    flexDirection: 'column',
    padding: '0px',
    scrollSnapAlign: 'start',
    transition: 'all 0.2s',
    [theme.breakpoints.up('xs')]: {
      minWidth: 'calc(50% - 8px)',
    },
    [theme.breakpoints.up('sm')]: {
      minWidth: 'calc(33% - 16px)',
    },
    [theme.breakpoints.up('md')]: {
      minWidth: '150px',
    },

    '& .card-txt': {
      width: '100%',
      display: 'block',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden'
    }
  },
  '&  .favMenu': {
    flex: '1',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  '&  .favBTN': {
    fontWeight: 600,
    minHeight: '40px',
    minWidth: 'auto',
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
    [theme.breakpoints.down('s')]: {
      fontSize: 10,
    },
  },
  '&  .avatar': {
    background: theme.palette.primary.main,
    marginLeft: '5px',
  },
  '& .userBtn': {
    paddingRight: '0'
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
  marginLeft: 'auto',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '85vw',
  },
}))

export default StyledUserMenu
