import React, { useState, useEffect } from 'react'

//Allows us to use data layer APIs eg Loader, etc
import { RouterProvider ,createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

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
import Marketing from './container/Marketing'
import Consulting, {loader as consultingLoader} from './container/Consulting'
import Error from './container/Error'
import Layout from './container/Layout'
import NotFound from './components/NotFound/NotFound'

const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home/>} />
        <Route path='About' element={<About/>} />
        <Route path='Contact' element={<Contact/>} />
        <Route path='Services' element={<Services/>} />
        <Route path='Applicant-Tracking' element={<ApplicantTrackingPage/>}  />
        <Route path='Employee-Onboarding' element={<EmployeeOnboarding/>} />
        <Route path='Leave-Management' element={<LeaveManagementPage/>} />
        <Route path='Intern-Directory' element={<InternDirectory/>} />
        <Route path='employee/:employeeId' element={<Employee/>} />
        <Route path='Marketing' element={<Marketing/>} />
        <Route path='Consulting' element={<Consulting/>} loader={consultingLoader} errorElement={<Error />} />
        <Route path='*' element={<NotFound />} />
    </Route>
  ))

  return (
    <div>
      {isLoading ? <LoadingSpinner /> : (
        <RouterProvider 
          router={router}
        />
      )}
    </div>
  )
}
export default App