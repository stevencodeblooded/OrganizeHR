import React from 'react'

import HeaderBg from '../../../images/LeavingBG.png'
import './Header.css'

const Header = () => {

  const leaveHeaderBg = {
    backgroundImage: `url(${HeaderBg})`,
    backgroundSize: 'cover'
  }

  return (
    <div className='leaving-header' style={leaveHeaderBg}>
      <h1>Employees List</h1>
    </div>
  )
}

export default Header