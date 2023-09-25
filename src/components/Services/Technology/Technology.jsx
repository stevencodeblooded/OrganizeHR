import React from 'react'

import consultingImage  from '../../../images/bg3.jpg'
import './Technology.css'

const Technology = () => {
  return (
   <div className='service'>
      <div>
        <h3>Payroll and HR Technology</h3>
        <p>
          Payroll Processing: Accurate and timely payroll services. <br />
        </p>
        <p>
          HR Software: User-friendly HR software solutions for efficient HR management. <br />
        </p>
        <p>
          Data Security: Ensuring the confidentiality and security of your HR data. <br />
        </p>
      </div>

      <img src={consultingImage} alt="consulting" className='service-image'/>
      
    </div>
  )
}

export default Technology