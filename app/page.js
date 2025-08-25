"use client"
import React, {  useEffect, useState } from 'react'
import {Login,EmployeeDahBoard,AdminDashBoard} from '../Components/index'
import Providers from '../Components/Providers'
import { ToastContainer } from 'react-toastify'
const page = () => {
  const [user, setuser] = useState(
    
  )

 
  useEffect(() => {
    
  }, [user])
  
  
  return (
    <Providers>   
      <ToastContainer/>
        {!user && <Login setuser={setuser} /> }
        {( user && user?.role == 'admin' )&& <AdminDashBoard data={user}/> } 
        {(user && user?.role == 'employee')&& <EmployeeDahBoard employeeData={loggedInUser}/> } 
    </Providers>
  )
}

export default page