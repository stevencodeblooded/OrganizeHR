import React from "react";

import './EmployeeInfo.css'

const EmployeInfo = ({ employee }) => {
  return (
    <div className="employee-info">
      <img
        src={employee.profilePicture}
        alt="employee-profile"
        className="employee-profile"
      />
      <h1>{employee.name}</h1>
      <p>{employee.jobTitle}</p>
    </div>
  );
};

export default EmployeInfo;
