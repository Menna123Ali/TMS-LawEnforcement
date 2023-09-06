import { styled } from '@mui/material'
import SearchVinModal from './SearchVinModal'

const StyledSearchVinModal = styled(SearchVinModal)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  background: '#f3f3f3',
  boxShadow: 24,
  padding: '20px',
  borderRadius: '5px',
  height: '45%',
  overflowY: 'auto',
  [theme.breakpoints.down('sm')]: {
    width: '90%',
  },
}))
export default StyledSearchVinModal
