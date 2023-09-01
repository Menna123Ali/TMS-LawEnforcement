import React from 'react'

const Logic = (rows, perPage, colOrderDirection, colOrder) => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(perPage)
  const [order, setOrder] = React.useState(colOrderDirection)
  const [orderBy, setOrderBy] = React.useState(colOrder)
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
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
  // const tableRows = orderBy ? stableSort(rows, getComparator(order, orderBy)) : rows
  const visibleRows = stableSort(rows, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }
  return { order, orderBy, visibleRows, page, rowsPerPage, emptyRows, handleRequestSort, handleChangePage, handleChangeRowsPerPage, stableSort, getComparator }
}

export default Logic
