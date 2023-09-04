import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material'

const CollapsiblePanel = ({ className, children, title, expanded = false, onClick }) => {
  return (
    <div className={className}>
      <Accordion expanded={expanded}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" onClick={onClick} className="_accordionSummary">
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  )
}
export default CollapsiblePanel
