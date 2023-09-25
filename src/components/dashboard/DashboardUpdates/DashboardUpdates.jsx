import React from 'react'

import './DashboardUpdates.css'

const DashboardUpdates = () => {
  return (
    <div className='dashboard-updates'>
        <h2>Important Updates</h2>
        <div className='update-item'>
            <p>Upcoming Company Event</p>
            <p>Team Building on July 30th</p>
        </div>
        <div className='update-item'>
            <p>Policy Update:</p>
            <p>Remote Work Guidelines</p>
        </div>
    </div>
  )
}

export default DashboardUpdates