import React from "react";
import AdminSideBar from "../AdminSideBar/AdminSideBar.tsx";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./AdminCourses.css";
import Ripples from "react-ripples";
import { Link } from "react-router-dom";

const AdminCourses = () => {
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
    "Course Title",
    "Total No of Participants",
    "Run",
    "Status",
    "Status",
  ];

  const data = [
    [
      1,
      "01 Sep 2021",
      "Precast Concrete Supervision",
      "20",
      "34",
      "Scheduled",
      "Hide",
    ],
    [
      2,
      "01 Sep 2021",
      "Precast Concrete Supervision",
      "20",
      "34",
      "Scheduled",
      "Unhide",
    ],
    [
      3,
      "01 Sep 2021",
      "Precast Concrete Supervision",
      "20",
      "34",
      "Completed",
      "Unhide",
    ],
    [
      4,
      "01 Sep 2021",
      "Precast Concrete Supervision",
      "20",
      "34",
      "Completed",
      "Unhide",
    ],
    [
      5,
      "01 Sep 2021",
      "Precast Concrete Supervision",
      "20",
      "34",
      "Scheduled",
      "Hide",
    ],
    [
      6,
      "01 Sep 2021",
      "Precast Concrete Supervision",
      "20",
      "34",
      "Cancelled",
      "Unhide",
    ],
    [
      7,
      "01 Sep 2021",
      "Precast Concrete Supervision",
      "20",
      "34",
      "Completed",
      "Hide",
    ],
    [
      8,
      "01 Sep 2021",
      "Precast Concrete Supervision",
      "20",
      "34",
      "Cancelled",
      "Unhide",
    ],
    [
      9,
      "01 Sep 2021",
      "Precast Concrete Supervision",
      "20",
      "34",
      "Scheduled",
      "Unhide",
    ],
    [
      10,
      "01 Sep 2021",
      "Precast Concrete Supervision",
      "20",
      "34",
      "Cancelled",
      "Unhide",
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
          <div className="table-btn-links ">
            <ul>
             
              <div
                style={{
                  display: "inline-flex",
                  borderRadius: 25,
                  overflow: "hidden",
                }}
              >
                <Ripples>
                  <li>
                    <Link to="" className="link">
                      Schedule Course
                    </Link>
                  </li>
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
                  <li>
                    <Link to="/adminAddCourse" className="link">
                      Add New Course
                    </Link>
                  </li>
                </Ripples>
              </div>
            </ul>
          </div>
          <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable data={data} columns={columns} options={options} />
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};
export default AdminCourses;
