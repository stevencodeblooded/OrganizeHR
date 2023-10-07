import React, { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'
import './DashboardUpdates.css'

const DashboardUpdates = () => {

  useEffect(() => {
    Aos.init()
  })

  return (
    <div className='dashboard-updates' data-aos='fade-up-right' data-aos-duration='1000'>
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