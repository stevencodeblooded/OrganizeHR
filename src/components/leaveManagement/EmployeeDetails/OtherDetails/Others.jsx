import React from "react";

import "./Others.css";

const Others = () => {
  return (
    <div className="others">
      <div className="employee-detail-item">
        <h3>Contact Details</h3>

        <div className="detail-label">
          <div>
            <h4>Email:</h4>
            <p>john@example.com</p>
          </div>

          <div>
            <h4>Phone:</h4>
            <p>123-456-7890</p>
          </div>

          <div>
            <h4>Department:</h4>
            <p>Engineering</p>
          </div>

          <div>
            <h4>Address:</h4>
            <p>123 Main Street, Nairobi, Kenya</p>
          </div>
        </div>
      </div>

      <div className="employment-details">
        <h3>Employment</h3>

        <div className="detail-label">
          <div className="status">
            <h4>Employment Status:</h4>
            <p>Active</p>
          </div>

          <div className="date-of-joining">
            <h4>Date of Joining:</h4>
            <p>2022-01-15</p>
          </div>

          <div className="employment-type">
            <h4>Employment Type:</h4>
            <p>Full-Time</p>
          </div>
        </div>
      </div>

      <div className="performance">
        <h3>Performance and Reviews</h3>

        <div className="reviews">
          <div className="detail-label">
            <div className="single">
              <h4>Date: </h4>
              <p>2022-03-01</p>
            </div>

            <div className="single">
              <h4>Rating: </h4>
              <p>Positive</p>
            </div>

            <div className="single">
              <h4>Comments: </h4>
              <p>Well done!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="reporting-manager">
        <h3>Reporting Manager:</h3>

        <div className="detail-label">
          <div className="single">
            <h4>Name: </h4>
            <p>Joseph Oselu</p>
          </div>

          <div className="single">
            <h4>Email:</h4>
            <p>oselu@example.com</p>
          </div>

          <div className="single">
            <h4>Phone: </h4>
            <p>987-654-3210</p>
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
              <p>Sick Leave</p>
            </div>
            <div className="leave-dates">
              <p>Dates: </p>
              <p>2022-05-15 to 2022-05-17</p>
            </div>
            <div className="leave-status">
              <p>Leave Status: </p>
              <p>Approved</p>
            </div>
          </div>

          <div className="leave-balance">
            <h4>Leave Balance:</h4>
            <p className="detail-value">15</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Others;
