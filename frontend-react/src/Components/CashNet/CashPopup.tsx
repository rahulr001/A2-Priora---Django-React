import React from 'react'
import { Link } from "react-router-dom";
import { Form,Input} from "antd";

import Ripples from "react-ripples";
function CashPopup() {
  return (
    <div className='cashpopup-container'>
      <div className="cashpopup-content">
      <div className='Cashpopup'>
      <h3>Upload Screen Shot</h3>
     </div>
      <div className='Cashpopup1'>
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
                  width: "12rem",
                  height:'1rem',
                }}
              />
            </Form.Item>
      </div>
      <div className='Cashpopup2'>
      <h3>Preview Area:</h3>
      </div>
     
          <div className="cashpopup-buttons">
          <Ripples>
            <Link to="" className="link-tab">
              <button type="button" className="cash-btn">
                Select
              </button>
            </Link>
          </Ripples>
          <Ripples>
            <Link to="" className="link-tab">
              <button className="cash-btn">Delete</button>
            </Link>
          </Ripples>
          <Ripples>
            <Link to="" className="link-tab">
              <button className="cash-btn">Done</button>
            </Link>
          </Ripples>
          </div>
          </div>
    </div>
  )
}

export default CashPopup
