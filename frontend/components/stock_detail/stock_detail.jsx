import React    from 'react';
import { Link } from 'react-router-dom';
import DashboardSidebar from './dashboard_sidebar/dashboard_sidebar';
import DashboardChart from '../charts/dashboard_chart/dashboard_chart';

const Dashboard = ({ currentUser, logout }) => {

  const homePage = () => {
    return (
      <div>
        <div>
          <h1>Dashboard</h1>
          <button className="header-button" onClick={logout}>Log Out</button>
        </div>
        <div>
          <DashboardChart></DashboardChart>
          <DashboardSidebar></DashboardSidebar>
        </div>
      </div>
    )
  }

  return homePage();
}

export default Dashboard;
