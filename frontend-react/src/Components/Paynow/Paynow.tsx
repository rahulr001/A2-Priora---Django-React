import React, { useState } from "react";
import "./Paynow.css";
import Navbar from "../Navbar/Navbar.tsx";
import Footer from "../Footer/Footer.tsx";
import Ripples from "react-ripples";
import { Link } from "react-router-dom";
import CashPopup from "./CashPopup/CashPopup.tsx";

const Paynow = () => {
  const [popup, setPopup] = useState(false);
  const paynownum = "2020XXXXXR";
  return (
    <>
      <Navbar />
      <div className="paynow-container">
        <div className="paynow-content">
          <h1>Payment Type: PayNow</h1>
          <h1>Grand Total: </h1>
        </div>
        <div className="paynow-container1">
          <div className="paynow-content1">
            <h2>Kindly Transfer to this Paynow Account:</h2>
            <h4>Paynow To UEN :{paynownum}</h4>
            <div className="qr">
              <h1>Or</h1>
              <h3>QR</h3>
            </div>
            <h4>Scan this QR code to make payment by using your bank app.</h4>
            <h4 style={{color:'red'}}>
              (NOTE: Before payment Check our name A2 PRIORA PROFESSIONAL
              INSTITUTE PTE LTD appears in payment page)
            </h4>
          </div>
          <div className="paynow-content2">
            <p>
              Once payment was done, Kindly take a screenshort or Snapshort of
              Recipt. And Upload it here.(Receipt in the form of JPG(Image) or
              PDF Format.)
            </p>
          </div>
        </div>

        <div className="paynow-buttons">
          <div
            style={{
              display: "inline-flex",
              borderRadius: 25,
              overflow: "hidden",
            }}
          >
            <Ripples>
              <Link to="/payments" className="link-tab">
                <button type="submit" className="paynow-btn">
                  Back
                </button>
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
              <Link to="/coursetable" className="link-tab">
                <button type="submit" className="paynow-btn">
                  Cancel
                </button>
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
              <Link to="" className="link-tab">
                <button
                  type="submit"
                  className="paynow-btn"
                  onClick={() => setPopup(true)}
                >
                  Upload
                </button>
              </Link>
            </Ripples>
          </div>
        </div>
      </div>
      <div
        className="popup"
        style={{ display: popup === true ? "block" : "none" }}
      >
        <CashPopup setPopup={setPopup} />
      </div>
      <Footer />
    </>
  );
};

export default Paynow;
