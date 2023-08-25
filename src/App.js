import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import ApplicantTrackingPage from './components/ApplicantTrackingPage'
import EmployeeOnboarding from './components/EmployeeOnboarding'
import LeaveManagementPage from './components/LeaveManagementPage'
import InternDirectory from './components/InternDirectory'
import Services from './components/Services'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route path='/About' Component={About}/>
        <Route path='/Contact' Component={Contact}/>
        <Route path='/Services' Component={Services}/>
        <Route path='/Applicant-Tracking' Component={ApplicantTrackingPage}/>
        <Route path='/Employee-Onboarding' Component={EmployeeOnboarding}/>
        <Route path='/Leave-Management' Component={LeaveManagementPage}/>
        <Route path='/Intern-Directory' Component={InternDirectory}/>
      </Routes>
    </Router>
  )
}

export default App