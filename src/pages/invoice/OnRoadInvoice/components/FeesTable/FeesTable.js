import React from 'react'
import AppTable from '../../../../../components/common/AppTable/AppTable.styles'
import { columns } from '../../constants'
import { shallowEqual, useSelector } from 'react-redux'
import { Accordion } from '@mui/material'

const FeesTable = () => {
  const state = useSelector((state) => {
    const { feesData } = state.onRoadInvoice
    return { feesData }
  }, shallowEqual)

  return (
    <>
      {state.feesData && <AppTable rows={state.feesData} columns={columns} />}
      {/* <div className="searchAccordion">
        <Accordion expanded={expanded}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" onClick={expandedChange} className="_accordionSummary">
            <Typography className={classes.heading}>{header}</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>{state.feesData && <AppTable rows={state.feesData} columns={columns} order={ordert} orderBy={orderByt} handleRequestSort={handleRequestSort} />}</AccordionDetails>
        </Accordion>
      </div> */}
    </>
  )
}

export default FeesTable
