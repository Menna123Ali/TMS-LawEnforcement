import { cacheAxiosApi } from './axios'

export const getAllLookupTables = ({ onSuccess, onError = () => {}, onComplete = () => {} }) => {
  cacheAxiosApi
    .get('/api/LookUpData/GetAllLookupTables')
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
