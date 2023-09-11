import React from 'react'

import './NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found'>
        <div className='not-found-contents'>
            <h1>Page Not Found</h1>
            <p>Sorry the page you are looking for does not exist.</p>
            <Link to='/'>Back to Home</Link>
        </div>
    </div>
  )
}

export default NotFound