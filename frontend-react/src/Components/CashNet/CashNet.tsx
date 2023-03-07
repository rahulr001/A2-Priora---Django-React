import React from "react";
import Navbar from "../Navbar/Navbar.tsx";
import Footer from "../Footer/Footer.tsx";
import "./CashNet.css";
import Ripples from "react-ripples";
import { Link } from "react-router-dom";
import "./CashNet.css"
import CashPopup from "./CashPopup.tsx";

function CashNet() {
  return (
    <>
      <Navbar />
      <div className="cash-container">
        <div className="cash-content">
          <h1>Payment Type: Cash/Nets </h1>
          <h1 align="Right">Grand Total: </h1>
        </div>
        <div className="cash-container1">
          <div className="cash-content1">
            <h2>Kindly Transfer to this Bank Account:</h2>
            <h4>Bank Name:</h4>
            <h4>Account Number :</h4>
            <h4>Account Holder :</h4>
            <h4>Bank Code :</h4>
            <h4>IFSC Code :</h4>
          </div>
          <div className="cash-content2">
            <p>
              Once payment was done, Kindly take a screenshort or Snapshort of
              Recipt. And Upload it here.(Receipt in the form of JPG(Image) or
              PDF Format.)
            </p>
          </div>
        </div>

        <div className="cash-buttons">
          <Ripples>
            <Link to="" className="link-tab">
              <button type="submit" className="cash-btn">
                Back
              </button>
            </Link>
          </Ripples>

          <Ripples>
            <Link to="" className="link-tab">
              <button type="submit" className="cash-btn">
                Cancel
              </button>
            </Link>
          </Ripples>

          <Ripples>
            <Link to="" className="link-tab">
              <button type="submit" className="cash-btn">
                Upload
              </button>
            </Link>
          </Ripples>
        </div>
      </div>
      <CashPopup/>
      <Footer />
    </>
  );
}

export default CashNet;
