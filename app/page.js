"use client"
import React, {  useEffect, useState } from 'react'
import {Login,EmployeeDahBoard,AdminDashBoard, PageLoader} from '../Components/index'
import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { loginStart, loginSuccess, loginFailed } from '@/store/features/userSlice'
const page = () => {
  const {user,loading,error,isLoggedIn}= useSelector((state)=>state.user)
  const dispatch=useDispatch();
  async function fetchUserData() {
    dispatch(loginStart());
    try {
      const response = await axios.get('/api/user/me');
      if (response.data.success) {
        dispatch(loginSuccess(response.data.user));
      } else {
        dispatch(loginFailed(response.data.message));
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      dispatch(loginFailed(errorMessage));
    }
  }
  useEffect(() => {
    fetchUserData();
  }, [])
  return (
    <>
        <ToastContainer/>
        {loading ? (
          <PageLoader message="Loading..." />
        ) : (
          <>
            {!user && <Login />}
            {(user && user?.role == 'admin') && <AdminDashBoard data={user} />}
            {(user && user?.role == 'user') && <EmployeeDahBoard fetchUserData={fetchUserData} employee={user} />}
          </>
        )}
    </>
  )
}

export default page