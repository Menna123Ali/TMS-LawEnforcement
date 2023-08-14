import { styled } from '@mui/material'
import { Paper } from "@mui/material"

export const StyledTable = styled(Paper)(
    ({ theme }) => ({
            
        '& .MuiTableCell-root:last-child': {
            textOverflow: 'unset',
            overflow: 'unset',
          },
          '& .Content-content-167': {
            display: 'inline',
          },
          '& .MuiToolbar-gutters': {
            justifyContent: 'space-between',
            '& div:first-child': {
              display: 'none',
            },
            '& div:nth-child(2)': {
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '8px',
              '& svg, & img': {
                position: 'static !important',
                left: 'initial !important',
              },
            },
          },
          '& .tdCell': { paddingTop: '0px', paddingBottom: '0px' },
          '& .MuiTableHead-root':{
            '& .MuiTableRow-head:first-child':{
                background: theme.palette.primary.main,
                '& .MuiTableCell-head':{
                    color: '#FFF',
                    '&:hover':{
                        color: '#FFF'
                    }
                },
                '.css-1qgma8u-MuiButtonBase-root-MuiTableSortLabel-root.Mui-active':{
                    color: '#FFF',
                },
                '.css-1qgma8u-MuiButtonBase-root-MuiTableSortLabel-root.Mui-active .MuiTableSortLabel-icon':{
                    color: theme.palette.secondary.main,
                }
              },
          },
         
          [theme.breakpoints.down('sm')]: {
            '&': { padding: '10px' },
            '& .MuiTable-root': {
              border: 0,
              display: 'contents',
      
              '& > .MuiTableHead-root': { display: 'none' },
              '& > .MuiTableBody-root': {
                display: 'block',
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
                  fontSize: '0.875rem',
                  padding: '16px',
                  '&:before': {
                    fontWeight: 'bold',
                    content: 'attr(data-label)',
                    color: theme.palette.primary,
                    fontSize: '0.875rem',
                  },
                },
              },
            },
            '& .MuiToolbar-gutters': {
              gap: '8px',
              marginBottom: '7px',
              paddingRight: '0px !important',
              flexDirection: 'column !important',
              justifyContent: 'center !important',
              alignItems: 'center',
              paddingBottom: '10px !important',
              // '& .MuiInput-root':{
              //   width: '155px',
              // }
            },
          },
    })
  )



 