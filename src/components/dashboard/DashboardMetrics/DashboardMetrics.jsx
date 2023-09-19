import React from 'react'

import { Fade } from "react-reveal";

import './DashboardMetrics.css'

const DashboardMetrics = () => {

  return (
    <div className='dashboard-metrics'>
        <Fade left duration={2000}>
            <h2>Key HR Metrics</h2>
            <div className='metrics-item'> 
                <h3>Total Interns</h3>
                <div className='metric-value'>150</div>
            </div>
            <div className='metrics-item'>
                <h3>Open Positions</h3>
                <div className='metric-value'>10</div>
            </div>
            <div className='metrics-item'>
                <h3>Applicants</h3>
                <div className='metric-value'>300</div>
            </div>
            <div className='metrics-item'>
                <h3>Onboarding Status</h3>
                <div className='metric-value'>20</div>
            </div>
        </Fade>
    </div>
  )
}

export default DashboardMetrics