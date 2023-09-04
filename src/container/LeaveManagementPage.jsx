import React from 'react'

import Nav from '../components/dashboard/Nav/Nav'
import LeaveManagement from '../components/leaveManagement/LeaveManagement'
import Footer from '../components/footer/Footer'

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