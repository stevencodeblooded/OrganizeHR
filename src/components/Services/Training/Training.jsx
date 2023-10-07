import React from 'react'

import consultingImage  from '../../../images/bg2.jpg'
import './Training.css'

const Training = () => {
  return (
    <div className='service' data-aos='fade-left' data-aos-duration='2000'>

      <img src={consultingImage} alt="consulting" className='service-image'/>

      <div>
        <h3>Training and Development</h3>
        <p>
          Training Needs Analysis: Identifying skills gaps and creating customized training programs. <br />
        </p>
        <p>
          Leadership Development: Programs to nurture leadership skills and talent within your organization. <br />
        </p>
        <p>
          Employee Skill Enhancement: Workshops and courses to improve employee skills and knowledge. <br />
        </p>
        <p>
          Soft Skills Training: Enhancing communication, teamwork, and interpersonal skills. <br />
        </p>
      </div>
      
    </div>
  )
}

export default Training