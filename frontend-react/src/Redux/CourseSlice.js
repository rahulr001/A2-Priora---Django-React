import { createSlice } from "@reduxjs/toolkit";


export const CourseSlice= createSlice({
    name:"course",
    initialState: { value :{
      coursename:"",
    },
  },
    reducers: {
        coursedata:(state, action) =>
         {
           state.value = action.payload;
         },
     }  
}) 

export const { coursedata } = CourseSlice.actions;
export default CourseSlice.reducer;