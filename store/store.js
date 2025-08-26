"use client";

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice"
import taskReducer from "./features/taskSlice"
import employeeReducer from "./features/employeeSlice"
export const store = configureStore({
  reducer: {
    user: userReducer,
    task: taskReducer,
    employees: employeeReducer
  },
});

