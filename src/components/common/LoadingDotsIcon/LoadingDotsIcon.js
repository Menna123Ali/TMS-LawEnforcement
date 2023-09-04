import React from 'react'
import Logo from '../../../assets/images/logo-mini.png'

function LoadingDotsIcon({ className }) {
  return (
    <div className={className}>
      <img className="icon" src={Logo} alt="" />
      <span className="label">Loading</span>
    </div>
  )
}

export default LoadingDotsIcon
