import React from "react";
import AdminSideBar from "../AdminSideBar/AdminSideBar.tsx";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./AdminHome.css";

const AdminHome = () => {
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
  const columns = ["S.No", "Date", "Course Title", "Seats", "Booked"];

  const data = [
    [1, "01 Sep 2021", "Precast Concrete Supervision", "20", "34"],
    [2, "01 Sep 2021", "Precast Concrete Supervision", "20", "34"],
    [3, "01 Sep 2021", "Precast Concrete Supervision", "20", "34"],
    [4, "01 Sep 2021", "Precast Concrete Supervision", "20", "34"],
    [5, "01 Sep 2021", "Precast Concrete Supervision", "20", "34"],
    [6, "01 Sep 2021", "Precast Concrete Supervision", "20", "34"],
    [7, "01 Sep 2021", "Precast Concrete Supervision", "20", "34"],
    [8, "01 Sep 2021", "Precast Concrete Supervision", "20", "34"],
    [9, "01 Sep 2021", "Precast Concrete Supervision", "20", "34"],
    [10, "01 Sep 2021", "Precast Concrete Supervision", "20", "34"],
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
          <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
              title={"Upcoming scheduled courses"}
              data={data}
              columns={columns}
              options={options}
            />
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};
export default AdminHome;
