import { useState } from 'react'
import { login } from '../../services/UserServices'
import { appSlice } from '../../store/AppSlice'
import { useDispatch } from 'react-redux'
import { LOCAL_STORAGE_CONSTANT } from '../../utils/constants/config'
import { useNavigate } from 'react-router-dom'
import UseFlashMessage from '../../utils/hooks/UseFlashMessage'

const Logic = () => {
  const { update: appUpdate } = appSlice.actions
  const dispatch = useDispatch()
  const [data, setData] = useState({
    isSubmitting: false,
    errorMessage: null,
  })
  const navigate = useNavigate()
  const { addFlashMessage } = UseFlashMessage()

  const handleFormSubmit = async (values) => {
    setData({
      isSubmitting: true,
      errorMessage: null,
    })
    login({
      payload: { username: values.username, password: values.password },
      onSuccess: (response) => {
        console.log(response)
        localStorage.setItem(LOCAL_STORAGE_CONSTANT.USERNAME, response.data.userData.name)
        localStorage.setItem(LOCAL_STORAGE_CONSTANT.TOKEN, response.data.token.result)
        localStorage.setItem(LOCAL_STORAGE_CONSTANT.AVATAR, 'avatar')
        localStorage.setItem(LOCAL_STORAGE_CONSTANT.USERDATA, JSON.stringify(response.data.userData))
        dispatch(
          appUpdate([
            { prop: 'isAuthenticated', value: true },
            { prop: 'username', value: response.data.userData.name },
            { prop: 'token', value: response.data.token.result },
            { prop: 'userData', value: response.data.userData },
            { prop: 'avatar', value: 'avatar' },
          ])
        )
        navigate('/')
        addFlashMessage({ type: 'success', message: 'Welcome ' + response.data.userData.name })
      },
      onError: (e) => {
        setData({
          isSubmitting: false,
          errorMessage: e,
        })
        addFlashMessage({ type: 'error', message: e })
      },
    })
  }

  return { data, handleFormSubmit }
}

export default Logic
