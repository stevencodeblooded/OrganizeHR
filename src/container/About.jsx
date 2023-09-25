import React from 'react'
import Welcome from '../components/About/Welcome/Welcome'
import Mission from '../components/About/Mission/Mission'
import Team from '../components/About/Team/Team'
import Distinction from '../components/About/Distinction/Distinction'
import Progress from '../components/About/Progress/Progress'

const About = () => {
  return (
    <div className='about'>
      <h1>About Us</h1>
      <div>
        <Welcome />
        <Mission />
        <Progress />
        <Team />
        <Distinction />
      </div>
    </div>
  )
}

export default About