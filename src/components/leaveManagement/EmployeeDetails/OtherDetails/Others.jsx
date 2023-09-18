import React, {useState} from "react";

import "./Others.css";
import Edit from "../Edit/Edit";

const Others = ({employee}) => {
  
  const [isEditEmployee, setIsEditEmployee] = useState(false);

  const handleLeaveApprove  = () => console.log('Approve');
  const handleLeaveReject = () => console.log('Reject');

  const handleEditLeaveApplicant = () => {
    setIsEditEmployee(true)
  }

  const handleExitApplicant = () => {
    setIsEditEmployee(false)
  }

  const [editedData, setEditedData] = useState({
    name: employee.name,
    email: employee.email,
    phone: employee.phone,
    address: employee.address,
  });

  const handleChange = (e) => {
      const {name, value} = e.target
      setEditedData((prev) => {
          return {
              ...prev,
              [name]: value
          }
      })
  }

  return (
    <div className="others">
      <div className="employee-detail-item">
        <h3>Contact Details</h3>

        <div className="detail-label">
          <div>
            <h4>Email:</h4>
            <p>{employee.email}</p>
          </div>

          <div>
            <h4>Phone:</h4>
            <p>{employee.phone}</p>
          </div>

          <div>
            <h4>Department:</h4>
            <p>{employee.department}</p>
          </div>

          <div>
            <h4>Address:</h4>
            <p>{employee.address}</p>
          </div>

          <div className="edit-employee-details">
            <button onClick={handleEditLeaveApplicant}>Edit</button>
          </div>

        </div>

      </div>

      <div className="employment-details">
        <h3>Employment</h3>

        <div className="detail-label">
          <div className="status">
            <h4>Employment Status:</h4>
            <p>{employee.employmentStatus}</p>
          </div>

          <div className="date-of-joining">
            <h4>Date of Joining:</h4>
            <p>{employee.dateOfJoining}</p>
          </div>

          <div className="employment-type">
            <h4>Employment Type:</h4>
            <p>{employee.employmentType}</p>
          </div>
        </div>
      </div>

      <div className="performance">
        <h3>Performance and Reviews</h3>

        <div className="reviews">
          <div className="detail-label">
            <div className="single">
              <h4>Date: </h4>
              <p>{employee.performanceReviews[0].date}</p>
            </div>

            <div className="single">
              <h4>Rating: </h4>
              <p>{employee.performanceReviews[0].rating}</p>
            </div>

            <div className="single">
              <h4>Comments: </h4>
              <p>{employee.performanceReviews[0].comments}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="reporting-manager">
        <h3>Reporting Manager:</h3>
        <div className="detail-label">
          <div className="single">
            <h4>Name: </h4>
            <p>{employee.reportingManager.name}</p>
          </div>

          <div className="single">
            <h4>Email:</h4>
            <p>{employee.reportingManager.email}</p>
          </div>

          <div className="single">
            <h4>Phone: </h4>
            <p>{employee.reportingManager.phone}</p>
          </div>
        </div>
      </div>

      <div className="leave-container">
        <h3>Time Away Details</h3>

        <div className="leave-flex">

          <div className="leave-item">
            <h4>Leave History</h4>
            <div className="leave-type">
              <p>Type: </p>
              <p>{employee.leaveHistory[0].type}</p>
            </div>
            <div className="leave-dates">
              <p>Dates: </p>
              <p>{employee.leaveHistory[0].dates}</p>
            </div>
            <div className="leave-status">
              <p>Leave Status: </p>
              <p>{employee.leaveHistory[0].status}</p>
            </div>

           <div className="leave-btns">
              <button className="approve" onClick={handleLeaveApprove}>Approve</button>
              <button className="reject" onClick={handleLeaveReject}>Reject</button>
           </div>
          </div>

          <div className="leave-balance">
            <h4>Leave Balance:</h4>
            <p className="detail-value">{employee.leaveBalance}</p>
          </div>
          
        </div>
      </div>

      <div className="edit-leave-employee-modal">
        {isEditEmployee ? (
          <Edit 
            editedData={editedData}
            handleChange={handleChange}
            exitApplicant={handleExitApplicant}
            setIsEditEmployee={setIsEditEmployee}
          />
        ) : null}
      </div>

    </div>
  );
};

export default Others;
