import React from 'react'

import './NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found'>
        <div className='not-found-contents'>
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <div>
            <p>Sorry the page you are looking for does not exist.</p>
            <Link to='/'>Back to Home</Link>
          </div>
        </div>
    </div>
  )
}

export default NotFound