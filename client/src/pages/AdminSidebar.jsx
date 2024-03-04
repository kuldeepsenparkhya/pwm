import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";

import "../components/sidebar.css";
import UserProfile from "./UserProfile";
import Dashboard from "../components/Dashboard";
const AdminSidebar = () => {
  return (
    <>
      <a className="menu" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"> <IoMenuSharp size={50} color="black"/> </a>
      <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel"> Coding yaar </h5>
          <button type="button"  className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          <ul>
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Dashboard/>
      
    </>
  );
};

export default AdminSidebar;
