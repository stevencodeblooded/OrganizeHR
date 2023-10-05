import React from "react";

import "./HeadTitle.css";

const HeadTitle = () => {
  return (
    <div className="headTitle">
        <div>
            <h1>Employee Onboarding</h1>
            <p>
                This page manages the onboarding process for new employees. It includes
                a checklist of tasks that need completion, such as paperwork, training,
                etc. HR can track the progress and ensure a smooth onboarding
                experience.
            </p>
        </div>
    </div>
  );
};

export default HeadTitle;
