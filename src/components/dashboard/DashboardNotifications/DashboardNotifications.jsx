import React from 'react'

import './DashboardNotifications.css'

const DashboardNotifications = () => {
  return (
    <div className='dashboard-notifications'>
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