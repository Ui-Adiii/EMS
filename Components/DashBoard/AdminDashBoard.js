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

  

  return (
    <div className="h-screen w-full px-3 md:p-10">
      <Header name={data.name} />
      <CreateTask fetchUsers={fetchUsers} />
      {
       ( employees.length > 0) ? <AllTask employees={employees} /> : <div className="text-white font-medium text-lg md:text-2xl mt-5">No Task Summary Available</div>
      }
      
    </div>
  );
};

export default AdminDashBoard;
