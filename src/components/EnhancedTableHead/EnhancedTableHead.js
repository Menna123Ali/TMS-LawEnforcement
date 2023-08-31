import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material'

const EnhancedTableHead = (props) => {
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
export default EnhancedTableHead
