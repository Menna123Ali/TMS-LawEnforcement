import { cacheAxiosApi, createCancelTokenHandler } from './axios'
import { GetCacheVersion } from '../utils/common'
// creating the cancel token handler object
const cancelTokenHandlerObject = createCancelTokenHandler(['getAllService'])
export const getAllService = ({ onSuccess, onError = () => {}, onComplete = () => {} }) => {
  cacheAxiosApi
    .get('/api/Service/AllServiceOnline?ver=' + GetCacheVersion('/api/Service/AllServiceOnline'), {
      cancelToken: cancelTokenHandlerObject['getAllService'].handleRequestCancellation().token,
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
export const getCategoriesWithSubTypes = ({ onSuccess, onError = () => {}, onComplete = () => {}, params }) => {
  console.log(params)
  cacheAxiosApi
    .get('/api/Applicationtype/GetCategoriesWithSubTypes?ver=' + GetCacheVersion('/api/Applicationtype/GetCategoriesWithSubTypes'), {
      params: {
        ...params,
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
export const calculateInvoiceFees = async ({ payload, onSuccess, onError = () => {}, onComplete = () => {} }) => {
  cacheAxiosApi
    .post('/api/Invoice/CalculateInvoiceFees/ByService', payload)
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

export const onPayInvoice = async ({ payload, onSuccess, onError = () => {}, onComplete = () => {} }) => {
  cacheAxiosApi
    .post('/api/Invoice/SearchAllInvoice', payload)
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
