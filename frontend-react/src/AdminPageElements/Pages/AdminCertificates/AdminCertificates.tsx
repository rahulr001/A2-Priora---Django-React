import React, { useEffect, useState } from "react";
import AdminSideBar from "../AdminSideBar/AdminSideBar.tsx";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./AdminCertificates.css";
import Ripples from "react-ripples";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  DataGrid,
  GridRenderCellParams,
  GridColDef,
  useGridApiContext,
} from "@mui/x-data-grid";
import { GridCellEditStopReasons } from "@mui/x-data-grid";
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from "@mui/x-data-grid-generator";

function SelectEditInputCell(props: GridRenderCellParams) {
  const { id, value, field } = props;
  const apiRef = useGridApiContext();

  const handleChange = async (event: SelectChangeEvent) => {
    await apiRef.current.setEditCellValue({
      id,
      field,
      value: event.target.value,
    });
    apiRef.current.stopCellEditMode({ id, field });
  };

  return (
    <Select
      value={value}
      onChange={handleChange}
      size="small"
      sx={{ height: 1 }}
      native
      autoFocus
    >
      <option>Back-end Developer</option>
      <option>Front-end Developer</option>
      <option>UX Designer</option>
    </Select>
  );
}

const renderSelectEditInputCell: GridColDef["renderCell"] = (params) => {
  return <SelectEditInputCell {...params} />;
};

const data = [
  {
    id: 1,
    sno: 1,
    reg_date: "2-3-2023",
    name: "AAAAAAAAAA",
    FIN_no: 1234567890,
    contact_no: 987654321,
    email: "example@gmail.com",
    payment_method: "PayPal",
    cert_status: "Sent",
  },
  {
    id: 2,
    sno: 2,
    reg_date: "2-3-2023",
    name: "AAAAAAAAAA",
    FIN_no: 1234567890,
    contact_no: 987654321,
    email: "example@gmail.com",
    payment_method: "PayPal",
    cert_status: "Sent",
  },
  {
    id: 3,
    sno: 3,
    reg_date: "2-3-2023",
    name: "AAAAAAAAAA",
    FIN_no: 1234567890,
    contact_no: 987654321,
    email: "example@gmail.com",
    payment_method: "PayPal",
    cert_status: "Sent",
  },
  {
    id: 4,
    sno: 4,
    reg_date: "2-3-2023",
    name: "AAAAAAAAAA",
    FIN_no: 1234567890,
    contact_no: 987654321,
    email: "example@gmail.com",
    payment_method: "PayPal",
    cert_status: "Sent",
  },
  {
    id: 5,
    sno: 5,
    reg_date: "2-3-2023",
    name: "AAAAAAAAAA",
    FIN_no: 1234567890,
    contact_no: 987654321,
    email: "example@gmail.com",
    payment_method: "PayPal",
    cert_status: "Sent",
  },
];

const AdminCertificates = () => {
  const columns = [
    { field: "sno", headerName: "S No", width: 80, editable: false },
    {
      field: "reg_date",
      headerName: "Reg Date",
      type: "date",
      width: 180,
      editable: false,
    },
    {
      field: "name",
      headerName: "Name",
      type: "string",
      width: 200,
      editable: true,
    },
    {
      field: "FIN_no",
      headerName: "FIN No",
      type: "number",
      width: 200,
      editable: true,
    },
    {
      field: "contact_no",
      headerName: "Contact No",
      type: "number",
      width: 200,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      type: "string",
      width: 200,
      editable: true,
    },
    {
      field: "payment_method",
      headerName: "Payment Method",

      width: 180,
      editable: false,
    },
    {
      field: "cert_status",
      headerName: "Cert Status",

      width: 180,
      editable: false,
    },
  ];

  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    setTableData(data);
  }, []);

    const options = {
        responsive:"standard"
    }

  return (
    <div>
      <AdminSideBar />
      <div className="table-container">
        <div className="table">
          <div style={{ height: 300, width: "100%" }}>
            <DataGrid
              rows={tableData}
                          columns={columns}
                          options={options}
                          
              experimentalFeatures={{ newEditingApi: true }}
              onCellEditStop={(params, event) => {
                if (params.reason === GridCellEditStopReasons.cellFocusOut) {
                  event.defaultMuiPrevented = true;
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminCertificates;
