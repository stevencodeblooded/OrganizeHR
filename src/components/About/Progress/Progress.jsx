import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBilibili, fa42Group, faAccessibleIcon, faAirbnb } from '@fortawesome/free-brands-svg-icons'

import './Progress.css'

const Progress = () => {
  return (
    <div className='flex'>
      <div className='border'>
        <div className='inner-border'>
          <h3>Unlocking progress at scale</h3>
          <div className='progress-elements'>
            <div>
              <FontAwesomeIcon className='scale-icon' icon={faBilibili}/>
              <h3>2,000</h3>
              <p>Lorem ipsum dolor</p>
            </div>

            <div>
              <FontAwesomeIcon className='scale-icon' icon={fa42Group}/>
              <h3>100</h3>
              <p>Lorem ipsum dolor</p>
            </div>

            <div>
              <FontAwesomeIcon className='scale-icon' icon={faAccessibleIcon} />
              <h3>500</h3>
              <p>Lorem ipsum dolor</p>
            </div>

            <div>
              <FontAwesomeIcon className='scale-icon' icon={faAirbnb} />
              <h3>30</h3>
              <p>Lorem ipsum dolor</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Progress