import React from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import { useDispatch, useSelector } from 'react-redux'
import Login from '../../../pages/Login/Login'
import { update } from '../../../store/testSlice'
import Test from './Test'

const Page404 = ({ className }) => {
  const dispatch = useDispatch()

  console.log('state')
  return (
    <div className={className}>
      <ErrorOutlineIcon className="errorIcon" />
      <span className="text404"> 404 </span>
      <span className="errorText"> We couldn't find this page</span>
      <span className="errorAuthorizedText"> Or you are not authorized to access this page</span>
      <span className="contactMessage"> Kindly contact your administrator</span>
      <Login />
      <Test />
      <button onClick={() => dispatch(update({ prop: 'value', value: 3 }))}>submit</button>
    </div>
  )
}

export default Page404
