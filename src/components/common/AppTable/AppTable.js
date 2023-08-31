import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel } from '@mui/material'
import { StyledTablePagination } from './AppTable.styles'
import { visuallyHidden } from '@mui/utils'
import React from 'react'

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort, columns } = props
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        {columns.map((headCell, index) => (
          <TableCell key={index} align={headCell.align} sortDirection={orderBy === headCell.id ? order : false}>
            {headCell.sortable ? (
              <TableSortLabel active={orderBy === headCell.id} direction={orderBy === headCell.id ? order : 'asc'} onClick={createSortHandler(headCell.id)}>
                {headCell.label}
              </TableSortLabel>
            ) : (
              headCell.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
const AppTable = ({ className, columns, orderBy, order = 'asc', handleRequestSort, size = 'medium' }) => {
  const [page, setPage] = React.useState(0)
  const [dense, setDense] = React.useState(false)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, user: { protein } }
  }

  const rows = [createData('Frozen yoghurt', 159, 6.0, 24, 4.0), createData('Ice cream sandwich', 237, 9.0, 37, 4.3), createData('Eclair', 262, 16.0, 24, 6.0), createData('Cupcake', 305, 3.7, 67, 4.3), createData('Gingerbread', 356, 16.0, 49, 3.9)]
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1
    }
    if (b[orderBy] > a[orderBy]) {
      return 1
    }
    return 0
  }
  function getComparator(order, orderBy) {
    return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy)
  }
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index])
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0])
      if (order !== 0) {
        return order
      }
      return a[1] - b[1]
    })
    return stabilizedThis.map((el) => el[0])
  }
  const headCells = [
    {
      id: 'calories',
      label: 'Calories',
      sortable: true,
      align: 'right',
      renderColumn: 'calories',
    },
    {
      id: 'fat',
      label: 'Fat (g)',
      sortable: true,
      align: 'right',
      renderColumn: 'fat',
    },
    {
      id: 'carbs',
      label: 'Carbs (g)',
      align: 'right',
      renderColumn: 'carbs',
    },
    {
      id: 'protein',
      label: 'Protein (g)',
      align: 'right',
      renderColumn: 'user.protein',
    },
  ]
  const visibleRows = React.useMemo(() => stableSort(rows, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage), [order, orderBy, page, rowsPerPage])
  const getRoute = (o, r) => r.split('.').reduce((c, s) => c[s], o)

  return (
    <>
      <TableContainer>
        <Table className={className} aria-labelledby="tableTitle" size={size} aria-label="enhanced table">
          <EnhancedTableHead columns={headCells} order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />

          <TableBody>
            {visibleRows.map((row, index) => {
              return (
                <TableRow tabIndex={-1} key={index}>
                  {headCells.map((headCell, index) => (
                    <TableCell align={headCell.align} key={index}>
                      {row[headCell.renderColumn]}
                    </TableCell>
                  ))}
                </TableRow>
              )
            })}
            {emptyRows > 0 && (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No data available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <StyledTablePagination rowsPerPageOptions={[5, 10, 25]} component="div" count={totalRows} rowsPerPage={rowsPerPage} page={page} onChangePage={handleChangePage} onChangeRowsPerPage={handleChangeRowsPerPage} /> */}
    </>
  )
}
export default AppTable
