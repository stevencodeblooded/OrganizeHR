import React from 'react'

import { useLoaderData } from 'react-router-dom'

export function loader () {
    // throw new Error('There was an Error')
    return 'The Data From The Loader Goes Here...'
}

const Consulting = () => {

    const data = useLoaderData()

  return (
    <div className='consulting'>
        <h1>Consulting Component</h1>
        <h3 style={{color: 'red'}}>{data}</h3>
    </div>
  )
}

export default Consulting