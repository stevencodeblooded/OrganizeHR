import React, { useState, useEffect } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './container/Home'
import Contact from './container/Contact'
import About from './container/About'
import ApplicantTrackingPage from './container/ApplicantTrackingPage'
import EmployeeOnboarding from './container/EmployeeOnboarding'
import LeaveManagementPage from './container/LeaveManagementPage'
import InternDirectory from './container/InternDirectory'
import Services from './container/Services'
import Employee from './components/leaveManagement/EmployeeDetails/Employee'
import LoadingSpinner from './components/spinnerLoader/LoadingSpinner'
import Layout from './container/Layout'
import NotFound from './components/NotFound/NotFound'

const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <div>
      {isLoading ? <LoadingSpinner /> : (
        <Router>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home/>} />
              <Route path='About' element={<About/>} />
              <Route path='Contact' element={<Contact/>} />
              <Route path='Services' element={<Services/>} />
              <Route path='Applicant-Tracking' element={<ApplicantTrackingPage/>} />
              <Route path='Employee-Onboarding' element={<EmployeeOnboarding/>} />
              <Route path='Leave-Management' element={<LeaveManagementPage/>} />
              <Route path='Intern-Directory' element={<InternDirectory/>} />
              <Route path='employee/:employeeId' element={<Employee/>} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
      </Router>
      )}
    </div>
  )
}
export default App