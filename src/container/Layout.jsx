import React from 'react'

import { Outlet } from 'react-router-dom'
import Nav from '../components/dashboard/Nav/Nav'
import Footer from '../components/footer/Footer'

const Layout = () => {
  return (
    <div>
        <Nav />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout