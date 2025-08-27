"use client";
import React, { useEffect, useState } from "react";
import { Header, CreateTask, AllTask, Loader } from "../index";
import axios from "axios";
import { toast } from "react-toastify";
import {
  addMultipleEmployeeFailure,
  addMultipleEmployeeSuccess,
  addMultipleEmployeeStart,
} from "@/store/features/employeeSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

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
        toast.error(response.data.message);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      dispatch(addMultipleEmployeeFailure(errorMessage));
      toast.error(errorMessage);
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
      <hr className=" mt-4 mb-2"/>
      <h1 className="font-medium text-lg md:text-2xl mt-5">Want to add employee ? </h1>
      <Link href="/user/register">
      <span className="!text-blue-500 underline">Click Here</span>
      </Link>
      <CreateTask fetchUsers={fetchUsers} />
      {loading ? (
        <div className="flex justify-center items-center mt-10">
          <Loader size="lg" />
        </div>
      ) : employees.length > 0 ? (
        <AllTask employees={employees} />
      ) : (
        <div className="text-white font-medium text-lg md:text-2xl mt-5">
          No Task Summary Available
        </div>
      )}
      
    </div>
  );
};

export default AdminDashBoard;
