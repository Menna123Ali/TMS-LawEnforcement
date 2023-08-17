import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { appSlice } from '../../store/AppSlice'

const Logic = () => {
  const { update: appUpdate } = appSlice.actions
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(
      appUpdate([
        { prop: 'isAuthenticated', value: false },
        { prop: 'username', value: null },
        { prop: 'token', value: null },
        { prop: 'userData', value: null },
      ])
    )
    localStorage.clear()

    window.location.href = '/login'
    // appDispatch({ type: 'FLASHMESSAGE', flashMessage: 'You are logged out', flashMessageType: 'warning' })
  }, [])

  return {}
}

export default Logic
