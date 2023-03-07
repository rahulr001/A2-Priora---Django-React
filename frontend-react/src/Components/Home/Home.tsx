import React from "react";
import Board from "../../Assets/Group 1.svg";
import BG from "../../Assets/Group 2.svg";
import Ripples from "react-ripples";
import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar.tsx";
import Footer from "../Footer/Footer.tsx";

const intro =
  "A2 PRIORA offers a wide range of courses from top universities and companies around the world. Their courses cover a variety of topics, including business, computer science, data science,  web technology, and more.";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-content">
          <div className="bg-img">
            <img className="left-img" src={Board} alt="" />
            <img className="right-img" src={BG} alt="" />
          </div>
          <div className="home-text">
            <h1>{intro}</h1>
          </div>
          <div
            className="home-button"
            style={{
              display: "inline-flex",
              borderRadius: 25,
              overflow: "hidden",
            }}
          >
            <Ripples>
              <Link to="/course" className="link-tab">
                <button type="button" className="home-btn">
                  Enroll-Now
                </button>
              </Link>
            </Ripples>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
