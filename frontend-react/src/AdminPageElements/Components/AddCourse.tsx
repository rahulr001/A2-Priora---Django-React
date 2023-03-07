import React from "react";

import "./AddCourse.css";

import { MenuItem, TextField } from "@mui/material";

import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { display } from "@mui/system";

const currencies = [
  {
    value: "USD",
  },
  {
    value: "EUR",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
  },
];

const AddCourse = () => {
  return (
    <Box
      component="form"
      display="flex"
      sx={{
        flexWrap: "wrap",
        gap: "2vw",
        alignItems: "flex-start",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-selet-currency"
        select
        label="Select Course"
        sx={{
          width: "15vw",
        }}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-selet-currency"
        select
        label="Run"
        sx={{
          width: "5vw",
        }}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-selet-currency"
        select
        label="Confirmation Email"
        sx={{
          width: "15vw",
        }}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>

      <div className="acc-container">
        <div style={{display:"flex", flexDirection:"column"}}>
          <span style={{margin:"5px 0 0 5px"}}>Accreditation Points : </span>
          <div className="acc-input">
            <TextField
              id="outlined-selet-currency"
              select
              label="PDU"
              sx={{
                width: "5vw",
              }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-selet-currency"
              select
              label="CET"
              sx={{
                width: "5vw",
              }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-selet-currency"
              select
              label="STU"
              sx={{
                width: "5vw",
              }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>
      </div>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value="Structural"
          control={<Radio />}
          label="Structural"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="Safety"
          control={<Radio />}
          label="Safety"
          labelPlacement="bottom"
        />
      </RadioGroup>
      <TextField
        id="outlined-selet-currency"
        select
        label="Confirmation Email"
        sx={{
          width: "15vw",
        }}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined"
        label="Start Date"
        sx={{
          width: "15vw",
        }}
      />
      <TextField
        id="outlined-selet-currency"
        select
        label="Time"
        sx={{
          width: "15vw",
        }}
      />
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value="Full Day"
          control={<Radio />}
          label="Full Day"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="Two Day"
          control={<Radio />}
          label="Two Day"
          labelPlacement="bottom"
        />
      </RadioGroup>
      <TextField
        id="outlined"
        label="End Date"
        sx={{
          width: "15vw",
        }}
      />

      <TextField
        id="outlined"
        label="Max Seat"
        sx={{
          width: "15vw",
        }}
      />

      <TextField
        id="outlined"
        label="Fee"
        sx={{
          width: "15vw",
        }}
      />
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value="Hide"
          control={<Radio />}
          label="Hide"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="Unhide"
          control={<Radio />}
          label="Unhide"
          labelPlacement="bottom"
        />
      </RadioGroup>
    </Box>
  );
};

export default AddCourse;
