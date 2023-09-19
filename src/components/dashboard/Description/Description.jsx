import React from 'react'

import { Fade } from 'react-reveal'

import descriptionImage from '../../../images/HRresources.png'
import descriptionImage2 from '../../../images/logoHrsd.jpeg'

import './Description.css'

const Description = () => {
  return (
    <div className='all-descriptions'>
        <div className='decription-container'>
          <Fade left duration={2000}>
            <img src={descriptionImage} alt="description" className='description-image' />
          </Fade>

          <Fade right width='100%' duration={2000}>
            <p className='text-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci pariatur ducimus odio culpa, ad alias sed. Dignissimos quisquam, expedita commodi obcaecati itaque iure, explicabo, ullam amet porro vel laudantium quo quae consequatur beatae animi placeat?</p>
          </Fade>

        </div>

        <div className='decription-container'>
          <Fade left duration={2000} >
            <p className='text-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci pariatur ducimus odio culpa, ad alias sed. Dignissimos quisquam, expedita commodi obcaecati itaque iure, explicabo, ullam amet porro vel laudantium quo quae consequatur beatae animi placeat?</p>
          </Fade>

          <Fade right duration={2000} >
            <img src={descriptionImage2} alt="description" className='description-image-2' />
          </Fade>
        </div>
    </div>
  )
}

export default Description