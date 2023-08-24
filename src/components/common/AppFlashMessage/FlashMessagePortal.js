import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import AppFlashMessage from './AppFlashMessage'

import { Snackbar } from '@mui/material'
import { shallowEqual, useSelector } from 'react-redux'
import UseFlashMessage from '../../../utils/hooks/UseFlashMessage'

const FlashMessagePortal = ({ autoClose = false, autoCloseTime = 5000 }) => {
  const { removeFlashMessage } = UseFlashMessage()
  const state = useSelector((state) => {
    const { flashMessages } = state.app
    return { flashMessages }
  }, shallowEqual)

  return ReactDOM.createPortal(
    <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={true}>
      <div>
        {state.flashMessages.map((t) => (
          <AppFlashMessage key={t.id} autoClose={autoClose} autoCloseTime={autoCloseTime} onClose={() => removeFlashMessage(t.id)} flashMessage={t} />
        ))}
      </div>
    </Snackbar>,

    document.getElementById('flashmessages-container')
  )
}

export default FlashMessagePortal
