import React from 'react'

import './Card.css'

const Card = (props) => {

  return (
    <div className='card'>
        <section>
            <h3>{props.employee.name}</h3>
            <p>{props.employee.department}</p>
        </section>
    </div>
  )
}

export default Card