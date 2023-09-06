import { styled } from '@mui/material'
import SubSearch from './SubSearch'

const StyledSubSearch = styled(SubSearch)(({ theme }) => ({
  background: '#fff',
  padding: theme.spacing(3),
  '& .searchContainer': {
    display: 'flex',

    '& ._grid': {
      flex: '1',
      '& .vinContainer': {
        display: 'flex',
        '& .MuiOutlinedInput-root': { borderTopRightRadius: 0, borderBottomRightRadius: 0 },
        '& .searchVinBtn': {
          // background: theme.palette.primary.main,
          borderRadius: '0px 5px 5px 0px',
          minWidth: '5em',
          '&:hover': {
            // background: theme.palette.primary.main,
          },
          '& svg': {
            color: 'white',
          },
        },
      },
    },
  },
}))
export default StyledSubSearch
