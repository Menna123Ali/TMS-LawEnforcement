import React from 'react'
import { DialogActions, DialogContent, DialogTitle, Dialog } from '@mui/material'
import AppButton from '../AppButton/AppButton'

const ConfirmationDialog = ({ onClick, onClose, visible = false, title = '', confirmButtonDisabled = false, children }) => {
  return (
    <Dialog fullWidth open={visible} onClose={onClose}>
      <DialogTitle> {title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <AppButton disabled={confirmButtonDisabled} onClick={onClick}>
          Confirm
        </AppButton>
        <AppButton variant="outlined" onClick={onClose}>
          Cancel
        </AppButton>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmationDialog
