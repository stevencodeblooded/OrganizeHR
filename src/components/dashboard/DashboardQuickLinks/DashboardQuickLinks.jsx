import React from 'react'

import { Link } from 'react-router-dom' 
import { Fade } from "react-reveal";

import './DashboardQuickLinks.css'

const DashboardQuickLinks = () => {
  return (
    <div className='dashboard-quick-links'> 
        <Fade right duration={2000}>
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
        </Fade>
    </div>
  )
}

export default DashboardQuickLinks