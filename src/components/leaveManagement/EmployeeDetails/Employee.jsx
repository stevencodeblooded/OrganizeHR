import React from "react";

import { useParams } from "react-router-dom";

import allEmployees from '../../../mockData/employeesList'
import EmployeInfo from './EmployeeInfo/EmployeInfo'
import loading from '../../../images/loading.png'
import Others from "./OtherDetails/Others";

import "./Employee.css";

const Employee = () => {
  const { employeeId } = useParams();

  const employee = allEmployees.find((employee) => {
    return employee.id === parseInt(employeeId);
  });

  return (
    <div>
      <div className="employee--page">
        {employee ? (
          <section className="each-employee-bg">
            <EmployeInfo 
              employee={employee}
            /> 

            <Others 
              employee={employee}
            />
          </section>
        ) : (
          <div className="loading-employee">
            <img src={loading} alt="loading" />
            <h1>Loading employee details now ...</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Employee;
