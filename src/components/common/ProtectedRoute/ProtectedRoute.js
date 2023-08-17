import { Navigate } from 'react-router-dom'
import { LOCAL_STORAGE_CONSTANT } from '../../../utils/constants/config'

const ProtectedRoute = ({ children }) => {
  let token = localStorage.getItem(LOCAL_STORAGE_CONSTANT.TOKEN)

  return token ? children : <Navigate to="/login" />
}

export default ProtectedRoute
