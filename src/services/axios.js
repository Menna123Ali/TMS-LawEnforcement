import axios from 'axios'
import { LOCAL_STORAGE_CONSTANT, currentEnvURL } from '../utils/constants/config'
import store from '../store/store'
import { appSlice } from '../store/AppSlice'

export const securityAxios = axios.create({
  baseURL: currentEnvURL.authApi,
  headers: {
    post: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  },
})

export const FrontAxios = axios.create({
  baseURL: currentEnvURL.FrontURL,
  headers: {
    post: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  },
})

export const NotificationAxios = axios.create({
  baseURL: currentEnvURL.NotificationApi,
  headers: {
    post: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  },
})

export const ReportAxios = axios.create({
  baseURL: currentEnvURL.reportApi,
  headers: {
    post: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  },
})

export const cacheAxiosApi = axios.create({
  baseURL: currentEnvURL.tmsApi,
  headers: {
    post: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  },
})
export const printerAxios = axios.create({
  baseURL: currentEnvURL.printServerApi,
  headers: {
    post: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  },
})

const requestHandler = async (request) => {
  const authToken = await localStorage.getItem(LOCAL_STORAGE_CONSTANT.TOKEN)

  let headers = {}
  if (authToken) {
    headers.Authorization = `Bearer ${authToken}`
  }

  request.headers = {
    ...request.headers,
    ...headers,
  }

  console.log(request)
  return request
}
const responseHandler = (response) => {
  return response
}
const exceptionHandler = (error) => {
  const { merge: appMerge } = appSlice.actions

  if (error.response.status === 401) {
    localStorage.clear()

    window.location.href = '/'
  }
  let msg = 'Server Request Failed'
  if (!!error.response && !!error.response.data && !!error.response.data.message) {
    msg = error.response.data.message
  }
  console.log(store)
  store.dispatch(
    appMerge([
      {
        prop: 'flashMessages',
        value: [{ type: 'error', message: msg, id: (Date.now() + '-' + Math.random()).toString(16).replace(/\./g, ''), start_time: Date.now() }],
      },
    ])
  )

  return Promise.reject(error)
}
// NotificationAxios REQUEST HANDLER
NotificationAxios.interceptors.request.use((request) => requestHandler(request))

// NotificationAxios RESPONSE HANDLER
NotificationAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => exceptionHandler(error)
)

// securityAxios REQUEST HANDLER
securityAxios.interceptors.request.use((request) => requestHandler(request))

// securityAxios RESPONSE HANDLER
securityAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => exceptionHandler(error)
)
// printerAxios REQUEST HANDLER
printerAxios.interceptors.request.use((request) => requestHandler(request))

// printerAxios RESPONSE HANDLER
printerAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => exceptionHandler(error)
)
// FrontAxios REQUEST HANDLER
FrontAxios.interceptors.request.use((request) => requestHandler(request))

// FrontAxios RESPONSE HANDLER
FrontAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => exceptionHandler(error)
)
// ReportAxios REQUEST HANDLER
ReportAxios.interceptors.request.use((request) => requestHandler(request))

// ReportAxios RESPONSE HANDLER
ReportAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => exceptionHandler(error)
)
