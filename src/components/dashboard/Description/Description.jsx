import React from 'react'

import descriptionImage from '../../../images/HRresources.png'
import descriptionImage2 from '../../../images/logoHrsd.jpeg'

import './Description.css'

const Description = () => {

  return (
    <div className='all-descriptions'>
        <div className='decription-container'>
            <img src={descriptionImage} alt="description" className='description-image' data-aos='flip-left' data-aos-duration='1500' />
            <p className='text-description' data-aos='zoom-in-up' data-aos-duration='1000'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci pariatur ducimus odio culpa, ad alias sed. Dignissimos quisquam, expedita commodi obcaecati itaque iure, explicabo, ullam amet porro vel laudantium quo quae consequatur beatae animi placeat?</p>
        </div>

        <div className='decription-container'>
            <p className='text-description' data-aos='zoom-in-up' data-aos-duration='1000'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci pariatur ducimus odio culpa, ad alias sed. Dignissimos quisquam, expedita commodi obcaecati itaque iure, explicabo, ullam amet porro vel laudantium quo quae consequatur beatae animi placeat?</p>
            <img src={descriptionImage2} alt="description" className='description-image-2' data-aos='flip-right' data-aos-duration='1500' />
        </div>
    </div>
  )
}

export default Description