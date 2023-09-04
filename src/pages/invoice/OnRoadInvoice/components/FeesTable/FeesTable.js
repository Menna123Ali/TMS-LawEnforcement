import React from 'react'
import AppTable from '../../../../../components/common/AppTable/AppTable.styles'
import { shallowEqual, useSelector } from 'react-redux'
import { Paper } from '@mui/material'
import Logic from './logic'
import CollapsiblePanel from '../../../../../components/common/CollapsiblePanel/CollapsiblePanel.styles'
import CustomerDataForm from '../CustomerDataForm/CustomerDataForm.styles'

const FeesTable = ({ className }) => {
  const { columns, expanded, setExpanded, formInvoiceRef, onCreateInvoice } = Logic()
  const state = useSelector((state) => {
    const { feesData } = state.onRoadInvoice
    return { feesData }
  }, shallowEqual)

  return (
    <div className={className}>
      {state.feesData && (
        <CollapsiblePanel expanded={expanded} onClick={() => setExpanded((expand) => !expand)} title="Search Result">
          <h4>Fees Details</h4>
          <Paper className="tableContainer">
            <AppTable rows={state.feesData} columns={columns} />
          </Paper>
          <CustomerDataForm />
        </CollapsiblePanel>
      )}
    </div>
  )
}

export default FeesTable
