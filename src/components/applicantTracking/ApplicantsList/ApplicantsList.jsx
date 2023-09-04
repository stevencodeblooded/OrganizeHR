import React from "react";

import './ApplicantsList.css'

const ApplicantsList = ({ handleApplicantClick, applicant }) => {

  return (
    <div className="applicant">

      <div
        onClick={() => handleApplicantClick(applicant)}
        className="border-black"
      >
        <img src={applicant.img} alt="Applicant" className="applicant-image"/>

        <div>
          <h2 className="applicant-name">{applicant.name}</h2>
          <p>Status: {applicant.status}</p>
          <p>Date: {applicant.applicationDate}</p>
          <p>Position: {applicant.jobPosition}</p>
        </div>
      </div>
    </div>
  );
};

export default ApplicantsList;
