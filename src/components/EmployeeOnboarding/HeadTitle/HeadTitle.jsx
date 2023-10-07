import React from "react";

import "./HeadTitle.css";

const HeadTitle = () => {
  return (
    <div className="headTitle">
        <div data-aos='fade-up' data-aos-duration='1500'>
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
