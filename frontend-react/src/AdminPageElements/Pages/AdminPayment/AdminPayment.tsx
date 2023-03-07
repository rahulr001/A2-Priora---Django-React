import React from "react";
import AdminSideBar from "../AdminSideBar/AdminSideBar.tsx";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./AdminPayment.css";
import Ripples from "react-ripples";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";

const AdminPayment = () => {
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
    "Date",
    "Course",
    "Name",
    "Fin No.",
    "Email",
    "Payment Method",
    "Pay Status",
    "Sent Status",
  ];

  const data = [
    [
      1,
      "01 Sep 2021",
      "AAAAAAAAAA",
      "AAAAAAAAAA",
      "098765432",
      "example@gmail.com",
      "PayPal",
      "Payment Pending",
      "sent",
    ],
    [
      2,
      "01 Sep 2021",
      "AAAAAAAAAA",
      "AAAAAAAAAA",
      "098765432",
      "example@gmail.com",
      "Bank Transfer",
      "Sent",
      "Not Yet",
    ],
    [
      3,
      "01 Sep 2021",
      "AAAAAAAAAA",
      "AAAAAAAAAA",
      "098765432",
      "example@gmail.com",
      "PayCashPal",
      "Payment Pending",
      "sent",
    ],
    [
      4,
      "01 Sep 2021",
      "AAAAAAAAAA",
      "AAAAAAAAAA",
      "098765432",
      "example@gmail.com",
      "PayPal",
      "Payment Pending",
      "Not Yet",
    ],
    [
      5,
      "01 Sep 2021",
      "AAAAAAAAAA",
      "AAAAAAAAAA",
      "098765432",
      "example@gmail.com",
      "Bank Transfer",
      "Payment Pending",
      "sent",
    ],
    [
      6,
      "01 Sep 2021",
      "AAAAAAAAAA",
      "AAAAAAAAAA",
      "098765432",
      "example@gmail.com",
      "Cash",
      "Sent",
      "Not Yet",
    ],
    [
      7,
      "01 Sep 2021",
      "AAAAAAAAAA",
      "AAAAAAAAAA",
      "098765432",
      "example@gmail.com",
      "PayPal",
      "Payment Pending",
      "Not Yet",
    ],
    [
      8,
      "01 Sep 2021",
      "AAAAAAAAAA",
      "AAAAAAAAAA",
      "098765432",
      "example@gmail.com",
      "PayPal",
      "Payment Pending",
      "sent",
      "Not Yet",
    ],
    [
      9,
      "01 Sep 2021",
      "AAAAAAAAAA",
      "AAAAAAAAAA",
      "098765432",
      "example@gmail.com",
      "Bank Transfer",
      "Sent",
      "Not Yet",
    ],
    [
      10,
      "01 Sep 2021",
      "AAAAAAAAAA",
      "AAAAAAAAAA",
      "098765432",
      "example@gmail.com",
      "Cash",
      "Payment Pending",
      "sent",
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
export default AdminPayment;
