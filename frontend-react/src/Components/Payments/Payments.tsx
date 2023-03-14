import React,{useEffect} from "react";
import Navbar from "../Navbar/Navbar.tsx";
import Footer from "../Footer/Footer.tsx";
import MUIDataTable from "mui-datatables";
import { Radio, Form } from "antd";
import Ripples from "react-ripples";
import { Link,useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FaTrash } from "react-icons/fa";
import Paypal from "./Paypal/Paypal.tsx";
import "./Payments.css";
import { display } from "@mui/system";

const Payments = () => {
  const navigate = useNavigate()
  const [ptype, setPtype] = React.useState("");
  const [paypal, setPaypal] = React.useState(false);
  const [banktransfer, setBankTransfer] = React.useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handlePayment = () => {
    if (ptype === "paypal") {
      return setPaypal(true);
    }
    else if(ptype === 'banktransfer'){
       return window.location.href='/banktransfer';
       //  navigate('/cashnet')
      } 
    else if(ptype === 'paynow'){
      return window.location.href='/paynow';
    }
    else if(ptype === 'cash'){
      return window.location.href='/cashnet';
    }
  };
  const getMuiTheme = () =>
    createTheme({
      components: {
        MUIDataTableBodyRow: {
          styleOverrides: {
            root: {
              "&:nth-child(even)": {
                backgroundColor: "#D9D9D9",
              },
            },
          },
        },
        MUIDataTableHeadCell: {
          styleOverrides: {
            root: {
              backgroundColor: "#D9D9D9",
            },
          },
        },
        MuiTableCell: {
          styleOverrides: {
            root: {
              textAlign: "center",
              padding: "10px 8px",
            },
          },
        },
        MuiGridListTile: {
          styleOverrides: {
            root: {
              "&:nth-child(3n)": {
                width: "100% !important",
              },
            },
          },
        },
      },
    });
  const columns = ["S.No", "Course Title", "FEE", "SubTotal"];

  const grandtotal = 70;
  const data = [
    ["1", "Structural Pointer Course", "$ 70", "$ 70"],
    ["2", "Full Stack Course", "$ 70", "$ 70"],
    ["3", "Full Stack Course", "$ 70", "$ 70"],
    ["4", "Structural Pointer Course", "$ 70", "$ 70"],
  ];

  const options = {
    responsive:'standard',
    filterType: "dropdown",
    selectableRows:'none',
    download: false,
    print: false,
    filter: false,
    search: false,
    viewColumns: false,
    pagination: false,
    rowHover: false,
    searchPlaceholder: "Type name to search",
    jumpToPage: false,
    rowsPerPageOptions: false,
    onChangePage(currentPage) {
      console.log({ currentPage });
    },
    onChangeRowsPerPage(numberOfRows) {
      console.log({ numberOfRows });
    },
  };

  return (
    <>
      <Navbar />
      <div className="payments-container">
        <div className="payments-header">
          <h1>Invoice</h1>
        </div>
        <div className="course-table">
          <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable data={data} columns={columns} options={options} />
          </ThemeProvider>
        </div>
        <div className="course-total">
          <div className="payment-type">
            <Form.Item
              className="payment-label"
              label="Payment-Type"
              style={{ width: "100%", marginBottom: "-1rem" }}
            >
              <Radio.Group
                name="payment_type"
                buttonStyle="solid"
                onChange={(e) => setPtype(e.target.value)}
              >
                <Radio.Button value="paypal" style={{ fontWeight: "bold" }}>
                  PayPal
                </Radio.Button>
                <Radio.Button value="paynow" style={{ fontWeight: "bold" }}>
                  PayNow
                </Radio.Button>
                <Radio.Button
                  value="banktransfer"
                  style={{ fontWeight: "bold" }}
                >
                  Bank Transfer
                </Radio.Button>
                <Radio.Button value="cash" style={{ fontWeight: "bold" }}>
                  Cash/Nets
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
          </div>
          <h1>Grand Total : ${grandtotal}</h1>
        </div>
        <div
          className="paypal"
          style={{ display: paypal === true ? "block" : "none" }}
        >
          <h1>Click To Pay On Paypal</h1>
          <Paypal total={grandtotal} />
          <button type="button" className="payments-btn" style={{margin:'1rem 0 0 35%'}} onClick={()=>setPaypal(false)}>
            Cancel
          </button>
        </div>

        <div className="payments-button">
          <div
            style={{
              display: "inline-flex",
              borderRadius: 25,
              overflow: "hidden",
            }}
          >
            <Ripples>
              <Link to="/sform/:course" className="link-tab">
                <button type="button" className="payments-btn">
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
              <Link to="/course" className="link-tab">
                <button className="payments-btn">Add Another Course</button>
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
              <Link to="/payments" className="link-tab">
                <button className="payments-btn" onClick={handlePayment}>
                  Proceed for Payment
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

export default Payments;
