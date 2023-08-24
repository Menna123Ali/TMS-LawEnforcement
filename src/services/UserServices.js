import { securityAxios } from './axios'

export const login = ({ payload, onSuccess, onError = () => {}, onComplete = () => {} }) => {
  securityAxios({
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
    .catch((e) => {
      onError(e)
    })
    .finally(() => {
      onComplete()
    })
}
export const getUserPages = async ({ payload, onSuccess, onError = () => {}, onComplete = () => {} }) => {
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
      onError(error)
    })
    .finally(() => {
      onComplete()
    })
}
