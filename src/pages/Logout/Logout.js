import { useDispatch } from 'react-redux'
import { appSlice } from '../../store/AppSlice'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import UseFlashMessage from '../../utils/hooks/UseFlashMessage'

const Logout = () => {
  const { update: appUpdate } = appSlice.actions
  const dispatch = useDispatch()
  const { addFlashMessage } = UseFlashMessage()
  const navigate = useNavigate()
  const logout = () => {
    dispatch(
      appUpdate([
        { prop: 'isAuthenticated', value: false },
        { prop: 'username', value: null },
        { prop: 'token', value: null },
        { prop: 'userData', value: null },
      ])
    )
    localStorage.clear()

    addFlashMessage({ type: 'warning', message: 'You are logged out' })
    navigate('/login')
  }
  useEffect(() => {
    logout()
  }, [])

  return null
}

export default Logout
