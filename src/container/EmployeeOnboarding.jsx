import React from "react";

import { authRequired } from "../components/utils/AuthRequired";
import HeadTitle from "../components/EmployeeOnboarding/HeadTitle/HeadTitle";
import Checklist from "../components/EmployeeOnboarding/ChecklistTasks/Checklist";

export async function loader ({ request }) {
  return authRequired(request)
}

const EmployeeOnboarding = () => {
  return (
    <div className="employee-onboarding">
      <HeadTitle />
      <Checklist />
    </div>
  );
};

export default EmployeeOnboarding;
