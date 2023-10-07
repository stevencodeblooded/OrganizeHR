import React from 'react'

import consultingImage  from '../../../images/bg4.jpeg'
import './Relations.css'

const Relations = () => {
  return (
    <div className='service'data-aos='fade-left' data-aos-duration='2000'>

      <img src={consultingImage} alt="consulting" className='service-image'/>

      <div>
        <h3> Employee Relations</h3>
        <p>
          Conflict Resolution: Mediation and conflict resolution services. <br />
        </p>

        <p>
          Employee Engagement: Strategies to boost employee morale and job satisfaction. <br />
        </p>
        <p>
          Disciplinary Actions: Guidance on addressing workplace misconduct professionally and fairly. <br />
        </p>
        <p>
          Employee Feedback: Implementing feedback mechanisms to improve workplace culture. <br />
        </p>
      </div>
      
    </div>
  )
}

export default Relations