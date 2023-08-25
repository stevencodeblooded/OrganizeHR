import React from "react";

import Nav from "../Nav/Nav";
import DashboardMetrics from "../DashboardMetrics/DashboardMetrics";
import DashboardNotifications from "../DashboardNotifications/DashboardNotifications";
import Heading from "../Heading/Heading";
import DashboardUpdates from "../DashboardUpdates/DashboardUpdates";
import DashboardQuickLinks from "../DashboardQuickLinks/DashboardQuickLinks";
import Footer from "../../footer/Footer";

import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Nav />
      <Heading />
      <div className="dashboard-container">
        <DashboardMetrics />
        <DashboardNotifications />
        <DashboardUpdates />
        <DashboardQuickLinks />
      </div>
        <Footer />
    </div>
  );
};

export default Dashboard;
