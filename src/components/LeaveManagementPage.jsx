import React from 'react'

import Nav from './dashboard/Nav/Nav'
import LeaveManagement from './leaveManagement/LeaveManagement/LeaveManagement'
import Footer from './footer/Footer'

const LeaveManagementPage = () => {
  return (
    <div className='leave-managt'>
      <Nav />
      <LeaveManagement />
      <Footer />
    </div>
  )
}

export default LeaveManagementPage