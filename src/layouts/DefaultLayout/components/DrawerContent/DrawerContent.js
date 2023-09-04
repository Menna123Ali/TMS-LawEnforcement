import { Divider, Icon, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Logo from '../../../../assets/images/logo-mini.png'
import MenuIcon from '@mui/icons-material/Menu'
import { AccordionDetailsRoot, DrawerHeader, ListRoot, NavLinkIconMain, StyledAccordion, StyledAccordionSummary } from './DrawerContent.styles'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { shallowEqual, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const DrawerContent = ({ className, handleDrawerClose }) => {
  const [expanded, setExpanded] = useState(false)
  const handleChangeAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  const state = useSelector((state) => {
    const { modulePages } = state.app
    return { modulePages }
  }, shallowEqual)

  return (
    <div className={className}>
      <div style={{ overflowX: 'hidden' }}>
        <DrawerHeader>
          <div className="drawerHeaderLogo">
            <img src={Logo} alt="" />
            <Typography variant={'h1'}>Traffic Management System</Typography>
          </div>
          <IconButton onClick={handleDrawerClose} className="drawerHeaderBtn">
            <MenuIcon />
          </IconButton>
        </DrawerHeader>
      </div>
      <Divider />

      {state.modulePages.map(
        (item, index) =>
          item.module.isMenuItem === true && (
            <React.Fragment key={index}>
              <StyledAccordion expanded={expanded === item.module.moduelId} onChange={handleChangeAccordion(item.module.moduelId)}>
                <StyledAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`${item.module.moduelId}-content`} id={`${item.module.moduleId}-header`}>
                  <ListItemIcon className="itemIconMain">{item.module.moduleIcon.iconName ? <NavLinkIconMain>{item.module.moduleIcon.iconName}</NavLinkIconMain> : <NavLinkIconMain>fiber_manual_record</NavLinkIconMain>}</ListItemIcon>

                  {item.module.moduleName}
                </StyledAccordionSummary>
                <AccordionDetailsRoot>
                  <ListRoot component="nav" aria-label="navigation links">
                    {item.pages.map((child) => (
                      <ListItem className="listItem" button component={NavLink} to={child.pageUrl} key={child.pageId}>
                        <ListItemIcon className="itemIcon">{child.pageIcon.iconName ? <Icon className="navLinkIcon">{child.pageIcon.iconName}</Icon> : <Icon className="navLinkIcon">fiber_manual_record</Icon>}</ListItemIcon>

                        <ListItemText className="listItemTextRoot">{child.pageName}</ListItemText>
                      </ListItem>
                    ))}
                  </ListRoot>
                </AccordionDetailsRoot>
              </StyledAccordion>
            </React.Fragment>
          )
      )}
    </div>
  )
}

export default DrawerContent
