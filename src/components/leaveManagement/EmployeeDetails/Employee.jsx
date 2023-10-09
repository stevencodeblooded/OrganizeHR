import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { getEmployee } from "../../utils/api"; 
import EmployeInfo from "./EmployeeInfo/EmployeInfo";
import loading from "../../../images/loading.png";
import Others from "./OtherDetails/Others";
import { authRequired } from "../../utils/AuthRequired";

import "./Employee.css";

export async function loader({ request }) {
  return await authRequired(request);
}

const Employee = () => {
  
  const { employeeId } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const employeeData = await getEmployee(employeeId);
        setEmployee(employeeData);
      } catch (error) {
        console.error("Error fetching employee:", error);
      }
    };

    fetchEmployee();
  }, [employeeId]);

  return (
    <div>
      <div className="employee--page">
        {employee ? (
          <section className="each-employee-bg">
            <EmployeInfo employee={employee} />
            <Others employee={employee} />
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
