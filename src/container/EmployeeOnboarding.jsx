import React from "react";

import { authRequired } from "../components/utils/AuthRequired";

export async function loader ({ request }) {
  return authRequired(request)
  
}

const EmployeeOnboarding = () => {
  return (
    <div className="employee-onboarding">
      <h1>EmployeeOnboarding</h1>
    </div>
  );
};

export default EmployeeOnboarding;
