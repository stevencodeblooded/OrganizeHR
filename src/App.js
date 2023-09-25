import React, { useState, useEffect } from 'react'

//Allows us to use data layer APIs eg loader, errorElement etc
import { RouterProvider ,createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import Home from './container/Home'
import Contact, { action as contactAction } from './container/Contact'
import About from './container/About'
import Services from './container/Services'
import Login, { action as loginAction } from './components/UserLogin/Login'
import SignUp, { action as signUpAction} from './components/UserLogin/SignUp/SignUp'
import ApplicantTrackingPage, { loader as applicantTrackingLoader } from './container/ApplicantTrackingPage'
import EmployeeOnboarding ,{ loader as employeeBoarding} from  './container/EmployeeOnboarding'
import LeaveManagementPage, { loader as leaveManagementLoader} from './container/LeaveManagementPage'
import InternDirectory, { loader as internDirectoryLoader} from './container/InternDirectory'
import Employee, { loader as employeeLoader } from './components/leaveManagement/EmployeeDetails/Employee'
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

  const router = createBrowserRouter(createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path='About' element={<About/>} />

        <Route 
          path='Contact' 
          element={<Contact/>} 
          action={contactAction}
        />

        <Route path='Services' element={<Services/>} />

        <Route 
          path='Login' 
          element={<Login />} 
          action={loginAction}
        />

        <Route 
          path='SignUp' 
          element={<SignUp />} 
          action={signUpAction} 
        />

        <Route 
          path='Applicant-Tracking' 
          element={<ApplicantTrackingPage/>}
          loader={applicantTrackingLoader}
        />

        <Route 
          path='Employee-Onboarding' 
          element={<EmployeeOnboarding/>}
          loader={employeeBoarding}
        />

        <Route 
          path='Leave-Management' 
          element={<LeaveManagementPage/>} 
          loader={leaveManagementLoader}
        />

        <Route 
          path='Intern-Directory' 
          element={<InternDirectory/>}
          loader={internDirectoryLoader}
        />

        <Route 
          path='employee/:employeeId' 
          element={<Employee/>}
          loader={employeeLoader}
        />

        <Route 
          path='*' 
          element={<NotFound />} 
        />

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