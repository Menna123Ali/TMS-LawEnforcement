import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Badge, Button, Popover, Typography, MenuItem, ListItemIcon, ListItemText } from '@mui/material'
import { Notifications as NotificationsIcon, TouchApp as TouchAppIcon, ExitToApp as ExitToAppIcon, SettingsApplications as MiscellaneousServicesIcon } from '@mui/icons-material'
import { UserMenuContainer } from './UserMenu.styles'
import Icon from '@mui/material/Icon'
import { useSelector, shallowEqual } from 'react-redux'

import AvatarImage from '../../../../assets/images/logo-mini.png'
import NotificationPopper from '../NotificationPopper'

const UserMenu = ({ className }) => {
  const [userMenu, setUserMenu] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [counter, setopencounter] = useState(false)
  const state = useSelector((state) => {
    const { favMenu, modulePages, userData } = state.app
    return { favMenu, modulePages, userData }
  }, shallowEqual)

  const userMenuClick = (event) => {
    setUserMenu(event.currentTarget)
  }

  const handleNotification = async (event) => {
    //
    setIsOpen(!isOpen)
    setAnchorEl(event.currentTarget)
    // appDispatch({
    //   type: 'TOASTNTOFICATIONCOUNTER',
    //   badgeContentNumber: 0,
    // })
    // try {
    //   const response = await NotificationAxios({
    //     method: 'PUT',
    //     url: `Notification/UpdateStatusForSearchModel?status=${status.seen}`,
    //     data: {
    //       statuses: [status.Send, status.deliverd],
    //       excepted: [status.seen, status.Read, status.unRead],
    //     },
    //   })

    //   if (response.data) {
    //     appDispatch({
    //       type: 'TOASTNTOFICATIONCOUNTER',
    //       badgeContentNumber: 0,
    //     })
    //   }
    // } catch (e) {
    //   console.log('Error in notfications')
    // }
  }

  const userMenuClose = () => {
    // appDispatch({ type: "LOGOUT" })
    // appDispatch({ type: "FLASHMESSAGE", flashMessage: "You've been logged out", flashMessageType: "success" })

    setUserMenu(null)
  }

  const handleLogout = () => {
    userMenuClose()
    window.location.href = '/logout'
  }

  const clickAwayHandler = () => setIsOpen(false)

  return (
    <div className={className}>
      <UserMenuContainer>
        {/* {props.TimeoutCountdown && props.TimeoutCountdown < 10 ? <div className="counterItem">{props.TimeoutCountdown && <div>Session Ends In {props.TimeoutCountdown} s</div>}</div> : ''} */}
        <Button className="min-h-40 userBtn" onClick={userMenuClick}>
          <div className="userText">
            <Typography className="userTitle">{state.userData?.name}</Typography>
          </div>
          <Avatar className="avatar" alt="user photo" src={AvatarImage} />
        </Button>
        {/* <div style={{ position: 'relative' }}>
          <Badge
            color="secondary"
            badgeContent={1}
            style={{
              position: 'absolute',
              right: '15px',
              top: '10px',
            }}
          ></Badge>

          <Button className="min-h-40 notification-btn" onClick={handleNotification}>
            <Avatar className="avatar">
              <NotificationsIcon />
            </Avatar>
          </Button>
        </div> */}
        <Popover
          open={Boolean(userMenu)}
          anchorEl={userMenu}
          onClose={userMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          classes={{
            paper: 'py-8',
          }}
        >
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </MenuItem>

          {/* <Link to="/Service" className="menuService">
            <MenuItem>
              <ListItemIcon>
                <MiscellaneousServicesIcon />
              </ListItemIcon>
              Service Info
            </MenuItem>
          </Link>

          <Link to="/Agent" className="menuService">
            <MenuItem>
              <ListItemIcon>
                <TouchAppIcon />
              </ListItemIcon>
              Agent
            </MenuItem>
          </Link> */}
        </Popover>
        {<NotificationPopper {...{ clickAwayHandler, isOpen, setopencounter, counter, anchorEl, setAnchorEl }} />}
        {/* {<SendNotification />} */}
      </UserMenuContainer>
      <div className="cards-container">
        <div className="cards">
          {Object.entries(state.favMenu).map((itemsSelected) => {
            if (itemsSelected[1]) {
              return (
                <React.Fragment key={itemsSelected[0]}>
                  <div className="card">
                    {state.modulePages.map((item) =>
                      item.pages.map((child) => {
                        if (child.pageId + '_Page' === itemsSelected[0]) {
                          return (
                            <Button key={child.pageId} title={child.pageName} size="small" component={Link} to={child.pageUrl} color="primary" className="favBTN" startIcon={<Icon>{child.pageIcon.iconName}</Icon>}>
                              <span className="card-txt">{child.pageName}</span>
                            </Button>
                          )
                        }
                        return null
                      })
                    )}
                  </div>
                </React.Fragment>
              )
            }
            return null
          })}
        </div>
      </div>
    </div>
  )
}

export default UserMenu
