import React from 'react'

import { Fade } from "react-reveal";

import './DashboardUpdates.css'

const DashboardUpdates = () => {
  return (
    <div className='dashboard-updates'>
      <Fade left duration={2000}>
        <h2>Important Updates</h2>
        <div className='update-item'>
            <p>Upcoming Company Event</p>
            <p>Team Building on July 30th</p>
        </div>
        <div className='update-item'>
            <p>Policy Update:</p>
            <p>Remote Work Guidelines</p>
        </div>
      </Fade>
    </div>
  )
}

export default DashboardUpdates