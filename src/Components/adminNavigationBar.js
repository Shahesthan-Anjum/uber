import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./Images/admin.jpg";
import adminProfileIcon from "./Images/user-check.jpg";
import adddriverIcon from "./Images/drivericon.jpg";
import driverListIcon from "./Images/driverlist.jpg";


export default class AdminNavigationBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              width="63"
              height="62"
              className="d-inline-block align-top"
              alt="admin-logo"
            />
          </a>
          <a className="navbar-brand" href="/">
            <h2>Admin</h2>
          </a>
          {/* <Link to="/" className="navbar-brand">
            <h2 className="navbar-brand">Admin</h2>
          </Link> */}

          <div className={`collapse  navbar-collapse  `}>
            <ul className="navbar-nav  mx-auto">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;
              <li className="navbar-item">
                <Link to="/adminProfile" className="nav-link">
                  <img src={adminProfileIcon}  width="63"
              height="62" alt="adminProfileIcon" />
                </Link>
              </li>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <li className="navbar-item">
                <Link to="/driverlist" className="nav-link">
                  <img src={driverListIcon}  width="63"
              height="62" alt="trainListIcon" />
                </Link>
              </li>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <li className="navbar-item">
                <Link to="/addDriver" className="nav-link">
                  <img src={adddriverIcon}  width="63"
              height="62" alt="adddriverIcon" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="collapse  navbar-collapse ">
            <ul className="navbar-nav  ml-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}