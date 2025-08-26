"use client";
import React, { useEffect, useState } from "react";
import { Header, CreateTask, AllTask } from "../index";
import axios from "axios";
import { toast } from "react-toastify";
import {
  addMultipleEmployeeFailure,
  addMultipleEmployeeSuccess,
  addMultipleEmployeeStart,
} from "@/store/features/employeeSlice";
import { useDispatch, useSelector } from "react-redux";

const AdminDashBoard = ({ data = null }) => {
  const { employees, loading, error } = useSelector((state) => state.employees);
  const dispatch = useDispatch();
  const fetchUsers = async () => {
    dispatch(addMultipleEmployeeStart());
    try {
      const response = await axios.get("/api/user/users");
      if (response.data.success) {
        dispatch(addMultipleEmployeeSuccess(response.data.users));
      } else {
        dispatch(addMultipleEmployeeFailure(response.data.message));
        toast.error(error);
      }
    } catch (error) {
      dispatch(addMultipleEmployeeFailure(error.message));
      toast.error(error);
    }
  };
  useEffect(() => {
    if (employees.length === 0) {
      fetchUsers();
    }
  }, []);

  console.log(employees)
  return (
    <div className="h-screen w-full px-3 md:p-10">
      <Header name={data.name} />
      <CreateTask />
      <AllTask employees={employees} />
    </div>
  );
};

export default AdminDashBoard;
