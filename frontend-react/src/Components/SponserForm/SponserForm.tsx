import React, { useEffect } from "react";
import "./SponserForm.css";
import { Form, Input, Radio } from "antd";
import Ripples from "react-ripples";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar.tsx";
import Footer from "../Footer/Footer.tsx";
import Sform from "./SForm";
import { useSelector } from "react-redux";

const SponserForm = () => {
  const { TextArea } = Input;
  const { course } = useParams();
  const { values, handleChange, handleSubmit } = Sform();
  const user = useSelector((state) => state.user.value);
  console.log(user);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="sform-container">
        <div className="sform-header">
          <h1>{course}</h1>
        </div>
        <div className="sform-content">
          <Form autoComplete="off">
            <Form.Item
              label="Sponsership-Type"
              style={{ width: "100%", marginBottom: "-1rem" }}
            >
              <Radio.Group
                value={values.sponsership_type}
                name="sponsership_type"
                onChange={handleChange}
              >
                <Radio value="self" style={{ fontWeight: "bold" }}>
                  {" "}
                  Self{" "}
                </Radio>
                <Radio value="company" style={{ fontWeight: "bold" }}>
                  {" "}
                  Company{" "}
                </Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="applicant_name"
              rules={[
                {
                  required: true,
                  message: "The applicant-name is required.",
                },
                {
                  pattern: /^[a-zA-Z0-9]+$/,
                  message: "Name can only include letters and numbers.",
                },
              ]}
            >
              <Input
                placeholder="Applicant-Name:*"
                name="applicant_name"
                type="text"
                value={values.applicant_name}
                onChange={handleChange}
                style={{
                  borderRadius: "5px",
                  border: "1px solid #000000",
                  width: "22rem",
                }}
              />
            </Form.Item>
            <Form.Item
              name="contact_number"
              rules={[
                {
                  required: true,
                  message: "Contact_number is required.",
                },
                {
                  max: 10,
                  message: "Contact-Number is not valid.",
                },
              ]}
            >
              <Input
                placeholder="Contact-Number:*"
                type="number"
                name="contact_no"
                value={values.contact_no}
                onChange={handleChange}
                style={{
                  borderRadius: "5px",
                  border: "1px solid #000000",
                  width: "22rem",
                }}
              />
            </Form.Item>
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
                value={values.email}
                onChange={handleChange}
                style={{
                  borderRadius: "5px",
                  border: "1px solid #000000",
                  width: "22rem",
                }}
              />
            </Form.Item>
            <Form.Item
              name="alternative_email"
              // rules={[
              //   {
              //     required: true,
              //     message: "The name is required.",
              //   },

              // ]}
            >
              <Input
                placeholder="Alternative-Email:"
                name="alternative_email"
                value={values.alternative_email}
                onChange={handleChange}
                type="email"
                style={{
                  borderRadius: "5px",
                  border: "1px solid #000000",
                  width: "22rem",
                }}
              />
            </Form.Item>
            <Form.Item
              name="company_name"
              rules={[
                {
                  required: true,
                  message: "The name is required.",
                },
              ]}
            >
              <Input
                placeholder="Company-Name:"
                name="company_name"
                value={values.company_name}
                onChange={handleChange}
                style={{
                  borderRadius: "5px",
                  border: "1px solid #000000",
                  width: "22rem",
                }}
              />
            </Form.Item>
            <Form.Item
              name="FIN/NRIC/Passport_No"
              rules={[
                {
                  required: true,
                  message: "The FIN/NRIC/Passport_No is required.",
                },
              ]}
            >
              <Input
                placeholder="FIN/NRIC/Passport_No:*"
                name="FIN_NRIC_Passport_no"
                value={values.FIN_NRIC_Passport_no}
                onChange={handleChange}
                style={{
                  borderRadius: "5px",
                  border: "1px solid #000000",
                  width: "22rem",
                }}
              />
            </Form.Item>
            <Form.Item
              name="membership_type"
              rules={[
                {
                  required: true,
                  message: "The Membership_type is required.",
                },
              ]}
            >
              <Input
                placeholder="Membership-Type:*"
                name="membership_type"
                value={values.membership_type}
                onChange={handleChange}
                style={{
                  borderRadius: "5px",
                  border: "1px solid #000000",
                  width: "22rem",
                }}
              />
            </Form.Item>
            <Form.Item
              name="membership_no"
              rules={[
                {
                  required: true,
                  message: "The Membership_No is required.",
                },
              ]}
            >
              <Input
                placeholder="Membership-No:"
                name="membership_no"
                value={values.membership_no}
                onChange={handleChange}
                style={{
                  borderRadius: "5px",
                  border: "1px solid #000000",
                  width: "22rem",
                }}
              />
            </Form.Item>
            <Form.Item
              name="postal_code"
              rules={[
                {
                  required: true,
                  message: "The Postal_Code is required.",
                },
              ]}
            >
              <Input
                placeholder="Postal-Code:*"
                name="postal_code"
                value={values.postal_code}
                onChange={handleChange}
                type="number"
                style={{
                  borderRadius: "5px",
                  border: "1px solid #000000",
                  width: "22rem",
                }}
              />
            </Form.Item>
            <Form.Item
              name="address"
              rules={[
                {
                  required: true,
                  message: "The Address is required.",
                },
              ]}
            >
              <TextArea
                placeholder="Address:*"
                name="address"
                value={values.address}
                onChange={handleChange}
                style={{
                  borderRadius: "5px",
                  border: "1px solid #000000",
                  width: "22rem",
                }}
              />
            </Form.Item>
            <div className="sform-button">
              <div
                style={{
                  display: "inline-flex",
                  borderRadius: 25,
                  overflow: "hidden",
                }}
              >
                <Ripples>
                  <Link to="/course" className="link-tab">
                    <button type="button" className="sform-btn">
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
                    <button onClick={handleSubmit} className="sform-btn">
                      Next
                    </button>
                </Ripples>
              </div>
            </div>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SponserForm;
