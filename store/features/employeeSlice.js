import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  employees: [],
  loading: false,
  error: null,
};
const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployeeStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    addEmployeeFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addEmployeeSuccess: (state, action) => {
      state.employees.push(action.payload);
      state.loading = false;
      state.error = null;
    },
    removeEmployeeStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    removeEmployeeFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    removeEmployeeSuccess: (state, action) => {
      state.employees = state.employees.filter(
        (employee) => employee.id !== action.payload
      );
      state.loading = false;
      state.error = null;
    },
    addMultipleEmployeeStart: (state) => {
      state.error = null;
      state.loading = true;
    },
    addMultipleEmployeeFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    addMultipleEmployeeSuccess: (state, action) => {
      state.employees = action.payload;
      state.error = null;
      state.loading = false;
    },
  },
});

export const {
  addEmployeeStart,
  addEmployeeSuccess,
  addEmployeeFailure,
  removeEmployeeStart,
  removeEmployeeFailure,
  removeEmployeeSuccess,
  addMultipleEmployeeStart,
  addMultipleEmployeeFailure,
  addMultipleEmployeeSuccess,
} = employeeSlice.actions;
export default employeeSlice.reducer;
