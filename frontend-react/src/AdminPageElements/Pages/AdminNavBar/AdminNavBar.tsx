import React from "react";
import "./AdminNavBar.css";
import { Link } from "react-router-dom";
import Logo from "../../../Assets/logo.svg";
import Ripples from "react-ripples";

const AdminNavBar = () => {
  return (
    <>
      <div className="adminnav-container">
        <div className="adminlogo">
          <img src={Logo} alt="" />
          <h1>A2PRIORA</h1>
        </div>
        <div className="adminnav-links">
          <ul>
            <div
              style={{
                display: "inline-flex",
                borderRadius: 25,
                overflow: "hidden",
              }}
            >
              <Ripples>
                <Link to="/" className="adminlinks">
                  <li>About US</li>
                </Link>
              </Ripples>
            </div>
            <div
              style={{
                display: "inline-flex",
                borderRadius: 25,
                overflow: "hidden",
              }}
            >
              <Ripples>
                <Link to="/course" className="adminlinks">
                  <li>Courses</li>
                </Link>
              </Ripples>
            </div>
            <div
              style={{
                display: "inline-flex",
                borderRadius: 25,
                overflow: "hidden",
              }}
            >
              <Ripples>
                <Link to="" className="adminlinks">
                  <li>Careers</li>
                </Link>
              </Ripples>
            </div>
            <div
              style={{
                display: "inline-flex",
                borderRadius: 25,
                overflow: "hidden",
              }}
            >
              <Ripples>
                <Link to="" className="adminlinks">
                  <li>Contact</li>
                </Link>
              </Ripples>
            </div>
            <div
              style={{
                display: "inline-flex",
                borderRadius: 25,
                overflow: "hidden",
              }}
            >
              <Ripples>
                <Link to="" className="adminlinks">
                  <li>Trainers</li>
                </Link>
              </Ripples>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminNavBar;
