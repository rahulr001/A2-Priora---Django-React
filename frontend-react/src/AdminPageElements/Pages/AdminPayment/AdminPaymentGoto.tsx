import React from "react";
import AdminSideBar from "../AdminSideBar/AdminSideBar.tsx";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./AdminPaymentGoto.css";
import Ripples from "react-ripples";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";

const AdminPaymentGoto = () => {
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
              fontSize: "1vw",
              textAlign: "center",
              padding: "10px 8px",
            },
          },
        },
      },
    });
  const columns = [
    "S.No",
    "Reg Date",
    "Name",
    "Fin No.",
    "Contact No.",
    "Email",
    "Payment Method",
    "Status",
    "Invoice",
    "Receipt",
  ];

  const data = [
    [
      1,
      "01 Sep 2021",
      "AAAAAAAAAA",
      "123456789",
      "098765432",
      "example@gmail.com",
      "PayPal",
      "Pending",
      "Not yet",
      "Not yet",
    ],
    [
      2,
      "01 Sep 2021",
      "AAAAAAAAAA",
      "123456789",
      "098765432",
      "example@gmail.com",
      "Bank Transfer",
      "Paid",
      "Sent",
      "Sent",
    ],
    [
      3,
      "01 Sep 2021",
      "AAAAAAAAAA",
      "123456789",
      "098765432",
      "example@gmail.com",
      "PayCashPal",
      "Pending",
      "Not yet",
      "Not yet",
    ],
    [
      4,
      "01 Sep 2021",
      "AAAAAAAAAA",
      "123456789",
      "098765432",
      "example@gmail.com",
      "PayPal",
      "Pending",
      "Not yet",
      "Not yet",
    ],
    [
      5,
      "01 Sep 2021",
      "AAAAAAAAAA",
      "123456789",
      "098765432",
      "example@gmail.com",
      "Bank Transfer",
      "Pending",
      "Not yet",
      "Not yet",
    ],
    [
      6,
      "01 Sep 2021",
      "AAAAAAAAAA",
      "123456789",
      "098765432",
      "example@gmail.com",
      "Cash",
      "Paid",
      "Sent",
      "Sent",
    ],
    [
      7,
      "01 Sep 2021",
      "AAAAAAAAAA",
      "123456789",
      "098765432",
      "example@gmail.com",
      "PayPal",
      "Pending",
      "Not yet",
      "Not yet",
    ],
    [
      8,
      "01 Sep 2021",
      "AAAAAAAAAA",
      "123456789",
      "098765432",
      "example@gmail.com",
      "PayPal",
      "Pending",
      "Not yet",
      "Not yet",
    ],
    [
      9,
      "01 Sep 2021",
      "AAAAAAAAAA",
      "123456789",
      "098765432",
      "example@gmail.com",
      "Bank Transfer",
      "Paid",
      "Sent",
      "Sent",
    ],
    [
      10,
      "01 Sep 2021",
      "AAAAAAAAAA",
      "123456789",
      "098765432",
      "example@gmail.com",
      "Cash",
      "Pending",
      "Not yet",
      "Not yet",
    ],
  ];

  const options = {
    filterType: "dropdown",
    selectableRows: false,
    download: false,
    print: false,
    viewColumns: false,
    rowHover: false,
    searchPlaceholder: "Type name to search",
    jumpToPage: false,
    rowsPerPageOptions: false,
    pagination: true,
    onChangePage(currentPage) {
      console.log({ currentPage });
    },
    onChangeRowsPerPage(numberOfRows) {
      console.log({ numberOfRows });
    },
  };
  return (
    <div>
      <AdminSideBar />
      <div className="table-container">
        <div className="table">
          <ul>
            <TextField
              id="outlined-selet-currency"
              select
              label="Select Course"
              sx={{
                width: "15vw",
              }}
            />
            <TextField
              id="outlined-selet-currency"
              select
              label="Run"
              sx={{
                width: "5vw",
              }}
            ></TextField>

            <TextField
              id="outlined"
              label="Start Date"
              sx={{
                width: "15vw",
              }}
            />

            <Link to="/adminCertificate" className="link">
              <li>Go to Courses</li>
            </Link>
          </ul>

          <div className="tabldfve-btn-links "></div>
          <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
              data={data}
              editMode="row"
              columns={columns}
              options={options}
            />
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};
export default AdminPaymentGoto;
;
