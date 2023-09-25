import React from 'react'

import consultingImage  from '../../../images/bg1.jpg'

import './Consulting.css'

const Consulting = () => {
  return (
      <div className='service'>
        <div>
          <h3>HR Consulting</h3>
            <p>
              HR Audits: Comprehensive evaluations of your HR practices to ensure compliance and efficiency.
            </p>
            <p>
              Policy Development: Tailored HR policies and employee handbooks.
            </p>
            <p>
              Compliance Assistance: Guidance on labor laws, regulations, and compliance best practices. 
            </p>
            <p>
              Performance Management: Strategies to enhance employee performance and engagement.
            </p>

        </div>

        <img src={consultingImage} alt="consulting" className='service-image'/>
      
    </div>    
  )
}

export default Consulting