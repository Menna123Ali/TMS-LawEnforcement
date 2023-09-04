import React from 'react'
import AppTable from '../../../../../components/common/AppTable/AppTable.styles'
import { shallowEqual, useSelector } from 'react-redux'
import { Paper } from '@mui/material'
import Logic from './logic'
import CollapsiblePanel from '../../../../../components/common/CollapsiblePanel/CollapsiblePanel.styles'

const InvoicesTable = ({ className }) => {
  const { columns, objIsEmpty } = Logic()
  const state = useSelector((state) => {
    const { invoicesSearchResult } = state.payInvoice
    return { invoicesSearchResult }
  }, shallowEqual)
  const [expanded, setExpanded] = React.useState(true)

  return (
    <div className={className}>
      {!objIsEmpty(state.invoicesSearchResult) && (
        <CollapsiblePanel expanded={expanded} onClick={() => setExpanded((expand) => !expand)} title="Search Result">
          <Paper className="tableContainer">
            <AppTable rows={state.invoicesSearchResult} columns={columns} />
          </Paper>
        </CollapsiblePanel>
      )}
    </div>
  )
}

export default InvoicesTable
