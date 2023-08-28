import { LOCAL_STORAGE_CONSTANT } from '../utils/constants/config'
import { generateSlice } from './GenerateSlice'

export const appSlice = generateSlice({
  name: 'app',
  initialState: {
    isAuthenticated: Boolean(localStorage.getItem(LOCAL_STORAGE_CONSTANT.TOKEN)),
    username: localStorage.getItem(LOCAL_STORAGE_CONSTANT.USERNAME),
    token: localStorage.getItem(LOCAL_STORAGE_CONSTANT.TOKEN),
    avatar: localStorage.getItem(LOCAL_STORAGE_CONSTANT.AVATAR),
    userData: JSON.parse(localStorage.getItem(LOCAL_STORAGE_CONSTANT.USERDATA)),
    modulePages: [],
    flashMessages: [],
    CACHE_DATA: null,
  },
})
