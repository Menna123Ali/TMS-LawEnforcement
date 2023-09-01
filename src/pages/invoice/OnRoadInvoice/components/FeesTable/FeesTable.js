import React from 'react'
import AppTable from '../../../../../components/common/AppTable/AppTable.styles'
import { shallowEqual, useSelector } from 'react-redux'
import { Paper } from '@mui/material'
import Logic from './logic'
import CollapsiblePanel from '../../../../../components/common/CollapsiblePanel/CollapsiblePanel.styles'

const FeesTable = ({ className }) => {
  const { columns } = Logic()
  const state = useSelector((state) => {
    const { feesData } = state.onRoadInvoice
    return { feesData }
  }, shallowEqual)
  const [expanded, setExpanded] = React.useState(true)

  return (
    <div className={className}>
      {state.feesData && (
        <CollapsiblePanel expanded={expanded} onClick={() => setExpanded((expand) => !expand)} title="Search Result">
          <Paper className="tableContainer">
            <AppTable rows={state.feesData} columns={columns} />
          </Paper>
        </CollapsiblePanel>
      )}
    </div>
  )
}

export default FeesTable
