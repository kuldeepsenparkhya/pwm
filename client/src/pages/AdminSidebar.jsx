import React from "react";
import { Link } from "react-router-dom";

import Dashboard from "../components/Dashboard";
import "../components/sidebar.css";

const AdminSidebar = () => {
  return (
    <>
      <div id="wrapper">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <h2>Logo</h2>
          </div>
          <ul className="sidebar-nav">
            <li className="">
              <Link to="/home">
                <i className="fa fa-home"></i>Dashboard
              </Link>
            </li>
            <li>
              <Link to="/home">
                <i className="fa fa-home"></i>Profile
              </Link>
            </li>
            <li>
              <Link to="/home">
                <i className="fa fa-home"></i>Project
              </Link>
            </li>
            <li>
              <Link to="/home">
                <i className="fa fa-home"></i>Skill
              </Link>
            </li>
            <li>
              <Link to="/home">
                <i className="fa fa-home"></i>Contact Us
              </Link>
            </li>
          </ul>
        </aside>
      </div>
      <Dashboard />
    </>
  );
};

export default AdminSidebar;
