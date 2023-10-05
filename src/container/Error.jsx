import React from 'react'

import { useRouteError } from 'react-router-dom'

const Error = () => {

  const error = useRouteError()

  return (
    <div className='error'>
        <h1>Error: {error.message}</h1> 
        <pre>{error.status} - {error.statusText}</pre>
    </div>
  )
}

export default Error