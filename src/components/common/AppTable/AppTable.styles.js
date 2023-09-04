import { TablePagination, styled } from '@mui/material'
import AppTable from './AppTable'

const StyledAppTable = styled(AppTable)(({ theme }) => ({
  overflow: 'hidden',

  '& .MuiTableHead-root': {
    background: theme.palette.primary.main,

    '& th': {
      color: theme.palette.textMuted.main,
      fontSize: '15px',
      fontWeight: 'bold',

      '& span': {
        '&:hover': {
          color: '#fff',
        },
        '&.MuiTableSortLabel-active': {
          color: '#fff',
        },
        '& svg': {
          color: '#fff !important',
        },
      },
    },
  },
  [theme.breakpoints.down('sm')]: {
    '&': { border: 0 },
    '& > .MuiTableHead-root': { display: 'none' },
    '& > .MuiTableBody-root': {
      '& tr': {
        display: 'block',
        marginBottom: '0.625em',
        border: '1px solid rgba(0,0,0,0.2)',
        borderRadius: 4,
        '& td:last-child': {
          borderBottom: 0,
        },
      },
      '& td': {
        display: 'flex',
        justifyContent: 'space-between',

        '&:before': {
          fontWeight: 'bold',
          content: 'attr(data-label)',
          color: theme.palette.primary.main,
        },
      },
    },
  },
}))
export const StyledTablePagination = styled(TablePagination)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: '#fff',
  fontSize: '14px',
  fontWeight: 'bold',

  '& svg': {
    color: '#fff',
  },
  '& .MuiIconButton-root.Mui-disabled': {
    color: 'rgba(255,255,255,0.5)',

    '& svg': {
      color: 'rgba(255,255,255,0.5)',
    },
  },
  '& .MuiTablePagination-toolbar': {
    padding: '0 16px',
  },
  '& .MuiTablePagination-spacer': {
    flex: 'auto',
    display: 'none',
  },
  '& .MuiTablePagination-actions': {
    marginLeft: 'auto',
  },
}))

export default StyledAppTable
