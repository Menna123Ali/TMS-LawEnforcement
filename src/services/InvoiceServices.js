import { ReportAxios, cacheAxiosApi, createCancelTokenHandler } from './axios'
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
export const addInvoice = async ({ payload, onSuccess, onError = () => {}, onComplete = () => {} }) => {
  cacheAxiosApi
    .post('/api/Invoice/AddInvoice', payload)
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
export const printInvoice = async ({ payload, onSuccess, onError = () => {}, onComplete = () => {} }) => {
  ReportAxios.get(`/Export/NewInvoiceReport?reportParamsURL=InvoiceId:${payload?.nInvoiceId};`, {
    responseType: 'blob',
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
export const payWithAttachReceiptForInvoice = async ({ payload, params, onSuccess, onError = () => {}, onComplete = () => {} }) => {
  cacheAxiosApi
    .post('/api/Invoice/PayWithAttachReceiptForInvoice', payload, {
      params: {
        ...params,
      },
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
export const getInvoicePaymentMethod = async ({ payload, onSuccess, onError = () => {}, onComplete = () => {} }) => {
  cacheAxiosApi
    .post('/api/Invoice/GetInvoicePaymentMethod?ver=' + GetCacheVersion('/api/Invoice/GetInvoicePaymentMethod'), payload)
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
export const loadDecodeVin = async ({ payload, onSuccess, onError = () => {}, onComplete = () => {} }) => {
  cacheAxiosApi
    .get('/api/Invoice/DecodeVin?vin=' + payload.vin)
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
