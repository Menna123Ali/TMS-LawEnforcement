import React from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

const Page404 = ({ className }) => {
  return (
    <div className={className}>
      <ErrorOutlineIcon className="errorIcon" />
      <span className="text404"> 404 </span>
      <span className="errorText"> We couldn't find this page</span>
      <span className="errorAuthorizedText"> Or you are not authorized to access this page</span>
      <span className="contactMessage"> Kindly contact your administrator</span>
    </div>
  )
}

export default Page404
