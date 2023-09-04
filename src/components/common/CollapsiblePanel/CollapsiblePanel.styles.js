import { styled } from '@mui/material'
import CollapsiblePanel from './CollapsiblePanel'

const StyledCollapsiblePanel = styled(CollapsiblePanel)(({ theme }) => ({
  marginBottom: '16px',

  '& > .MuiPaper-root': {
    overflow: 'hidden',
  },
  '& ._accordionSummary': {
    backgroundColor: theme.palette.grey.main,

    '& .MuiIconButton-root, & .MuiTypography-root': {
      fontWeight: 'bold',
      color: '#fff',
    },

    '& .MuiSvgIcon-root': {
      color: theme.palette.secondary.main,
    },
  },

  '& .Mui-expanded': {
    backgroundColor: theme.palette.primary.main,
  },

  '& .MuiAccordionDetails-root': {
    background: '#fff',
    display: 'block',
  },
}))
export default StyledCollapsiblePanel
