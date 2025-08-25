"use client";
import {
  logoutSuccess,
  logoutStart,
  logoutFailed,
} from "@/store/features/userSlice";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Header = ({ name }) => {
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const logOutUser = async () => {
    dispatch(logoutStart());
    try {
      const response = await axios.get("/api/user/logout");
      if (response.data.success) {
        toast.success(response.data.message);
        dispatch(logoutSuccess());
        window.location.reload();
      } else {
        dispatch(logoutFailed(response.data.message));
        toast.error(error);
      }
    } catch (error) {
      dispatch(logoutFailed(error.message));
      toast.error(error);
    }
  };
  return (
    <>
      <div className="flex items-end justify-between">
        <h1 className="text-2xl font-medium ">
          Hello <br /> <span className="text-3xl font-bold">{name}✌️</span>{" "}
        </h1>
        <button
          onClick={logOutUser}
          className="bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-lg hover:bg-red-600 "
        >
          Log out
        </button>
      </div>
    </>
  );
};

export default Header;
