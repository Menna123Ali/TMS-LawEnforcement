import { securityAxios, createCancelTokenHandler } from './axios'

// creating the cancel token handler object
const cancelTokenHandlerObject = createCancelTokenHandler(['getUserPages'])
export const login = ({ payload, onSuccess, onError = () => {}, onComplete = () => {} }) => {
  securityAxios
    .post('/api/Auth/Login', {
      username: payload.username,
      password: payload.password,
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
  securityAxios
    .post('/api/UserManager/GetUserPages', payload, {
      cancelToken: cancelTokenHandlerObject['getUserPages'].handleRequestCancellation().token,
    })
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
