import React,{useState} from "react";
import "./BankTransfer.css";
import Navbar from "../Navbar/Navbar.tsx";
import Footer from "../Footer/Footer.tsx";
import Ripples from "react-ripples";
import { Link } from "react-router-dom";
import CashPopup from "./CashPopup/CashPopup.tsx";

function BankTransfer() {
    const [popup,setPopup]=useState(false);
  return (
    <>
      <Navbar />
      <div className="btransfer-container">
        <div className="btransfer-content">
          <h1>Payment Type: Bank Transfer</h1>
          <h1>Grand Total: </h1>
        </div>
        <div className="btransfer-container1">
          <div className="btransfer-content1">
            <h2>Kindly Transfer to this Bank Account:</h2>
            <h4>Bank Name:</h4>
            <h4>Account Number :</h4>
            <h4>Account Holder :</h4>
            <h4>Bank Code :</h4>
            <h4>IFSC Code :</h4>
          </div>
          <div className="btransfer-content2">
            <p>
              Once payment was done, Kindly take a screenshort or Snapshort of
              Recipt. And Upload it here.(Receipt in the form of JPG(Image) or
              PDF Format.)
            </p>
          </div>
        </div>

        <div className="btransfer-buttons">
        <div
                style={{
                  display: "inline-flex",
                  borderRadius: 25,
                  overflow: "hidden",
                }}
              >
          <Ripples>
            <Link to="/payments" className="link-tab">
              <button type="submit" className="btransfer-btn">
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
              <button type="submit" className="btransfer-btn">
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
              <button type="submit" className="btransfer-btn" onClick={()=>setPopup(true)}>
                Upload
              </button>
            </Link>
          </Ripples>
          </div>
        </div>
      </div>
      <div className="popup" style={{display:popup===true?'block':'none'}}>
      <CashPopup setPopup={setPopup}/>
      </div>
      <Footer />
    </>
  )
}

export default BankTransfer