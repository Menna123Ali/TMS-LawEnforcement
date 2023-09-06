import React, { useState } from 'react'
import AppTable from '../../../../../components/common/AppTable/AppTable.styles'
import { shallowEqual, useSelector } from 'react-redux'
import { Paper } from '@mui/material'
import Logic from './logic'
import CollapsiblePanel from '../../../../../components/common/CollapsiblePanel/CollapsiblePanel.styles'
import InvoicePayment from '../../../components/InvoicePayment/InvoicePayment.styles'

const InvoicesTable = ({ className }) => {
  const [expanded, setExpanded] = useState(true)
  const { columns, objIsEmpty, onPaySuccess, onReset } = Logic()

  const state = useSelector((state) => {
    const { invoicesSearchResult, selectedInvoiceToPay } = state.payInvoice
    return { invoicesSearchResult, selectedInvoiceToPay }
  }, shallowEqual)

  return (
    <div className={className}>
      {state.invoicesSearchResult.length > 0 && (
        <CollapsiblePanel expanded={expanded} onClick={() => setExpanded((expand) => !expand)} title="Search Result">
          <Paper className="tableContainer">
            <AppTable rows={state.invoicesSearchResult} columns={columns} />
          </Paper>
        </CollapsiblePanel>
      )}
      {!objIsEmpty(state.selectedInvoiceToPay) && <InvoicePayment data={state.selectedInvoiceToPay} onPaySuccess={onPaySuccess} onReset={onReset} resetButtonLabel="Reset" />}
    </div>
  )
}

export default InvoicesTable
