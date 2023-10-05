import React from "react";

import Consuling from '../components/Services/Consulting/Consulting'
import Relations from '../components/Services/Relations/Relations'
import Technology from '../components/Services/Technology/Technology'
import Training from '../components/Services/Training/Training'

const Services = () => {

  return (
    <div className="services">
      <h1>Our Services</h1>
      <div className="service-components">
        <Consuling />
        <hr className='horizontal-service' />
        <Relations />
        <hr className='horizontal-service' />
        <Technology />
        <hr className='horizontal-service' />
        <Training />
        <hr className='horizontal-service' />
      </div>
    </div>
  );
};

export default Services;
