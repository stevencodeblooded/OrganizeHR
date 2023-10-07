import React, { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'
import './DashboardNotifications.css'

const DashboardNotifications = () => {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div className='dashboard-notifications' data-aos='fade-left' data-aos-duration='1000'>
          <h2>Notifications</h2>
          <div className='notification-item'>
              <h3>New Job Opening</h3>
              <p>Senior Software Engineer</p>
              <p>Requested 2 days ago</p>
          </div>
          <div className='notification-item'>
              <h3>Leave Requests</h3>
              <p>Pending for John Doe</p>
              <p>Requested 5 days ago</p>
          </div>
    </div>
  )
}

export default DashboardNotifications