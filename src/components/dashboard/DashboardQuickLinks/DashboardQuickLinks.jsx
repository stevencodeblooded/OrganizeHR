import React, { useEffect } from 'react'

import { Link } from 'react-router-dom' 
import Aos from 'aos'
import 'aos/dist/aos.css'
import './DashboardQuickLinks.css'

const DashboardQuickLinks = () => {

  useEffect(() => {
    Aos.init()
  })

  return (
    <div className='dashboard-quick-links' data-aos='fade-up-left'  data-aos-duration='1000'> 
            <h2>Quick-Links</h2>
            <div className='quick-link-item'>
                <h3>Applicant Tracking</h3>
                <Link to='/Applicant-Tracking' className='quick-links' >Click to View</Link>
            </div>

            <div className='quick-link-item'>
                <h3>Employee Onboarding</h3>
                <Link to='/Employee-Onboarding' className='quick-links' >Access checklist</Link>
            </div>

            <div className='quick-link-item'>
                <h3>Leave Management</h3>
                <Link to='/Leave-Management' className='quick-links' >Leave Management</Link>
            </div>

            <div className='quick-link-item'>
                <h3>Intern's Directory</h3>
                <input type='text' placeholder='Search Interns' />
            </div>
    </div>
  )
}

export default DashboardQuickLinks