import React from 'react'
import AppTable from '../../../../../components/common/AppTable/AppTable.styles'
import { columns } from '../../constants'

const FeesTable = () => {
  const [ordert, setOrder] = React.useState('asc')
  const [orderByt, setOrderBy] = React.useState('calories')
  const handleRequestSort = (event, property) => {
    const isAsc = orderByt === property && ordert === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }
  return <AppTable columns={columns} order={ordert} orderBy={orderByt} handleRequestSort={handleRequestSort} />
}

export default FeesTable
