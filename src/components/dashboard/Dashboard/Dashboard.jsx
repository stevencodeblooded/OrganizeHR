import React from "react";

import DashboardMetrics from "../DashboardMetrics/DashboardMetrics";
import DashboardNotifications from "../DashboardNotifications/DashboardNotifications";
import Heading from "../Heading/Heading";
import DashboardUpdates from "../DashboardUpdates/DashboardUpdates";
import DashboardQuickLinks from "../DashboardQuickLinks/DashboardQuickLinks";
import Description from "../Description/Description";

import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Heading />
      <div className="dashboard-container">
        <DashboardMetrics />
        <DashboardNotifications />
        <DashboardUpdates />
        <DashboardQuickLinks />
      </div>
      <div className="description">
        <Description />
      </div>
    </div>
  );
};

export default Dashboard;
