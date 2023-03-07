import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      sponsership_type:"",
      selected_course: "",
      applicant_name: "",
      contact_no: 0,
      email: "",
      alternative_email: "",
      address: "",
      postal_code: "",
      FIN_NRIC_Passport_no: "",
      company_name: "",
      membership_type: "",
      membership_no: "",
      payment: "",
    },
  },
  reducers: {
     userdata:(state, action) =>
     
      {
        state.value = action.payload;
      },
  }  
});

export const { userdata } = UserSlice.actions;
export default UserSlice.reducer;