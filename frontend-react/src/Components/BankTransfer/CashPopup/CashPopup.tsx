import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Input } from "antd";
import "./CashPopup.css";

import Ripples from "react-ripples";

function CashPopup({setPopup}) {
  const [pimg, setPimg] = useState(null);
  const [preview, setPreview] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setPimg(file); // Store the selected file in state
    const reader = new FileReader();
    reader.readAsDataURL(file); // Read the file as a data URL
    reader.onload = () => {
      setPreview(reader.result); // Store the data URL in state
    };
  };

  return (
    <div className="cashpopup-container">
      <div className="cashpopup-content">
        <div className="Cashpopup">
          <h3>Upload Screen Shot</h3>
        </div>
        <div className="Cashpopup1">
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "The email is required.",
              },
              {
                pattern:
                  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                message: "Email is not valid.",
              },
            ]}
          >
            <Input
              placeholder="E-mail:*"
              name="email"
              // value={values.email}
              // onChange={handleChange}
              style={{
                borderRadius: "5px",
                border: "1px solid #000000",
                width: "20rem",
                height: "1rem",
              }}
            />
          </Form.Item>
        </div>
        <div className="Cashpopup2">
          {pimg === null ? (
            <h3>Preview Area:</h3>
          ) : (
            <img src={preview} alt="" />
          )}
        </div>

        <div className="cashpopup-buttons">
          <div
            style={{
              display: "inline-flex",
              borderRadius: 25,
              overflow: "hidden",
            }}
          >
            <Ripples>
              <div className="upload-btn-wrapper">
                <input type="file" onChange={handleFileChange} />
                <button className="cash-btn">select</button>
              </div>
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
              <button
                className="cash-btn"
                onClick={() => {
                  setPimg(null);
                  setPreview(null);
                }}
              >
                Delete
              </button>
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
                <button className="cash-btn" onClick={()=>setPopup(false)}>Done</button>
              </Link>
            </Ripples>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CashPopup;
