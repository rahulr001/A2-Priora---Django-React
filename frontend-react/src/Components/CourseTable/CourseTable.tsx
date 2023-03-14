import React from "react";
import Navbar from "../Navbar/Navbar.tsx";
import Footer from "../Footer/Footer.tsx";
import MUIDataTable from "mui-datatables";
import Ripples from "react-ripples";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FaTrash } from "react-icons/fa";
import "./CourseTable.css";

const CourseTable = () => {

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
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const columns = [
    "S.No",
    "Name",
    "FIN/NRIC/Passport_No",
    "Selected_Course",
    "Actions",
  ];

  const data = [
    [
      "1",
      "Joe James",
      "123456",
      "Structural Pointer Course",
      <FaTrash style={{ color: "red", cursor: "pointer" }} />,
    ],
    [
      "2",
      "John Walsh",
      "678901",
      "Full Stack Course",
      <FaTrash style={{ color: "red", cursor: "pointer" }} />,
    ],
    [
      "3",
      "Bob Herm",
      "111314",
      "Full Stack Course",
      <FaTrash style={{ color: "red", cursor: "pointer" }} />,
    ],
    [
      "4",
      "James Houston",
      "212223",
      "Structural Pointer Course",
      <FaTrash style={{ color: "red", cursor: "pointer" }} />,
    ],
  ];

  const options = {
    responsive:'standard',
    filterType: "dropdown",
    selectableRows:'none',
    download: false,
    print: false,
    viewColumns: false,
    rowHover: false,
    searchPlaceholder: "Type name to search",
    jumpToPage: false,
    rowsPerPageOptions: false,
    pagination: true,
    // onChangePage(currentPage) {
    //   console.log({ currentPage });
    // },
    // onChangeRowsPerPage(numberOfRows) {
    //   console.log({ numberOfRows });
    // },
  };

  return (
    <>
      <Navbar />
      <div className="coursetable-container">
        <div className="coursetable-header">
          <h1>List of Selected Course</h1>
        </div>
        <div className="course-table">
          <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable data={data} columns={columns} options={options} />
          </ThemeProvider>
        </div>
        <div className="coursetable-button">
          <div
            style={{
              display: "inline-flex",
              borderRadius: 25,
              overflow: "hidden",
            }}
          >
            <Ripples>
              <Link to="/sform" className="link-tab">
                <button type="button" className="ctable-btn">
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
                <button className="ctable-btn">Add Another Course</button>
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
                <button className="ctable-btn">Proceed for Payment</button>
              </Link>
            </Ripples>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseTable;
