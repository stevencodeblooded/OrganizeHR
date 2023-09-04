import React from 'react'

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import "./Card.css";

const Card = ({employee}) => {

  const navigate = useNavigate();

  const handleEmployeeCardClick = () => {
    navigate(`/employee/${employee.id}`);
  };

  return (
    <div className="card" onClick={handleEmployeeCardClick}>
        <section>
          <div className='profile-flex'>
            <img src={employee.profilePicture} alt='employee' className='employee-profile-pic' />
          </div>
          <img className='bg-image-profile' src="data:image/jpeg;base64,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" alt="bg--profile" />
          <div className='details-for-employee'>
            <h3 className='employee-name'>{employee.name}</h3>
            <p>{employee.jobTitle}</p>
            <hr className='horizontal' />
          </div>

          <div className='other-details'>
              <section className='other-details-flex'>
                <h5>Status: </h5>
                <h5 className='content-list'>{employee.employmentStatus}</h5>
              </section>
              <section className='other-details-flex'>
                <h5>Leave Balance: </h5>
                <h5 className='content-list'>{employee.leaveBalance}</h5>
              </section>

              <section className='another-horizontal' >
                <hr />
              </section>
          </div>

          <div className='phone-number'>
            <p>
              <FontAwesomeIcon icon={faPhone} className='phone-icon'/> {employee.phone}
            </p>
          </div>

        </section>
    </div>
  );
};

export default Card;
