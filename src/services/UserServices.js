import { securityAxios } from './axios'

export const login = async ({ payload, onSuccess, onError = () => {}, onComplete = () => {} }) => {
  try {
    await securityAxios({
      method: 'POST',
      url: '/api/Auth/Login',
      data: {
        username: payload.username,
        password: payload.password,
      },
    })
      .then(function (response) {
        onSuccess(response)
      })
      .catch((error) => {
        var msg = 'Server Request Failed'
        if (error.response != null) {
          if (error.response.status === 401) {
            msg = 'Session ended or unautherized access'
          } else {
            msg = error.response.data.message
          }
        }
        alert('errrrss')
        onError(msg)
      })
      .finally(() => {
        onComplete()
      })
  } catch (e) {
    console.log(e.response) // undefined
    alert('err')
  }
}
export const checkToken = async ({ payload, onSuccess, onError = () => {}, onComplete = () => {} }) => {
  securityAxios(
    {
      method: 'POST',
      url: '/api/UserManager/GetUserPages',
    }
    // { cancelToken: ourRequest.token }
  )
    .then(function (response) {
      onSuccess(response)
    })
    .catch((error) => {
      var msg = 'Server Request Failed'
      if (error.response != null) {
        if (error.response.status === 401) {
          msg = 'Session ended or unautherized access'
        } else {
          msg = error.response.data.message
        }
      }

      onError(msg)
    })
    .finally(() => {
      onComplete()
    })
}
