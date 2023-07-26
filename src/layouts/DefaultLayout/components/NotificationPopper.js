import React from 'react'
import { Popover, ClickAwayListener } from '@mui/material'

const NotificationPopper = ({ clickAwayHandler, setopencounter, counter, anchorEl, setAnchorEl }) => {
  const handleClose = () => {
    setAnchorEl(null)
  }

  const Viewall = () => {
    // props.history.push('/notifications')
    setAnchorEl(null)
  }
  
  return (
    <ClickAwayListener onClickAway={clickAwayHandler}>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
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
        <div style={{ overflowY: 'hidden', height: '100%', width: '500px' }}>
          <div style={{ height: '65px', backgroundColor: 'rgb(21,68,122)', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <span style={{ paddingLeft: '15px', color: 'white', fontSize: '20px' }}>Notification Box</span>
          </div>

          <div style={{ maxHeight: 'calc(100vh - 58vh)', overflowY: 'auto' }}>
            <div style={{ padding: '15px', width: '100%', textAlign: 'center' }}>
              <span style={{ fontWeight: 'bold', fontSize: '14px' }}>
                no notifications
                <br></br>
              </span>
            </div>
          </div>

          <div style={{ border: '1px solid rgb(247,144,30)', borderTop: '0px', borderRight: '0px', height: '25px', backgroundColor: 'rgb(21,68,122)', display: 'flex', justifyContent: 'flex-end', cursor: 'pointer', alignItems: 'center' }}>
            <span onClick={() => Viewall()} style={{ paddingRight: '15px', color: 'white', fontSize: '12px', cursor: 'pointer' }}>
              view all
            </span>
          </div>
        </div>
      </Popover>
    </ClickAwayListener>
  )
}

export default NotificationPopper
