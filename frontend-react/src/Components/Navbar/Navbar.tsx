import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../../src/Assets/logo.svg";
import Ripples from "react-ripples";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <img src={Logo} alt="" />
        <h1>A2PRIORA</h1>
      </div>
      <div className="nav-links">
        <ul>
          <div
            style={{
              display: "inline-flex",
              borderRadius: 25,
              overflow: "hidden",
            }}
          >
            <Ripples>
              <Link to="/" className="links">
                <li>Home</li>
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
            <Link to="/course" className="links">
              <li>Course</li>
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
            <Link to="" className="links">
              <li>About</li>
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
            <Link to="" className="links">
              <li>Career</li>
            </Link>
          </Ripples>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
