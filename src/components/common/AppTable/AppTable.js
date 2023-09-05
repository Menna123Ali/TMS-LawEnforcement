import { Table, TableBody, TableCell, TableContainer, TablePagination, TableRow } from '@mui/material'
import { StyledTablePagination } from './AppTable.styles'
import React from 'react'
import dotPropImmutable from 'dot-prop-immutable'
import Logic from './logic'
import EnhancedTableHead from '../EnhancedTableHead/EnhancedTableHead'

const AppTable = ({ className, rows, columns, orderColumn, orderDirection = 'asc', size = 'medium', perPage = 10 }) => {
  const { order, orderBy, visibleRows, page, rowsPerPage, emptyRows, handleChangePage, handleChangeRowsPerPage, handleRequestSort } = Logic(rows, perPage, orderDirection, orderColumn)
  return (
    <>
      <TableContainer>
        <Table className={className} aria-labelledby="tableTitle" size={size} aria-label="enhanced table">
          <EnhancedTableHead columns={columns} order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />

          <TableBody>
            {visibleRows.map((row, index) => {
              return (
                <TableRow tabIndex={-1} key={index}>
                  {columns.map((headCell, index) => (
                    <TableCell align={headCell.align} key={index} data-label={headCell.label}>
                      {/* {dotPropImmutable.get(row, headCell.renderColumn)} */}

                      {typeof headCell.renderColumn == 'string' ? dotPropImmutable.get(row, headCell.renderColumn) : typeof headCell.renderColumn == 'function' ? headCell.renderColumn(row) : headCell.renderColumn}
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
      <StyledTablePagination rowsPerPageOptions={[5, 10, 25]} component="div" count={rows.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
    </>
  )
}
export default AppTable
