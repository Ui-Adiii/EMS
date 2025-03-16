"use client"
import React, {  useContext, useEffect, useState } from 'react'
import {Login,EmployeeDahBoard,AdminDashBoard,setLocalStorage,getLocalStorage} from '../app/Components/index'
import { AuthContext } from './Context/AuthProvider'
const page = () => {
  const authData=useContext(AuthContext)
  
  const [user, setuser] = useState(null)
  const [loggedInUser, setloggedInUser] = useState(null)
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    // setLocalStorage()
    const loggedInData=localStorage.getItem('loggedInUser')
    if(loggedInData){
      const userData=JSON.parse(loggedInData)
      setuser(userData.role)
      setloggedInUser(userData.data)
    }
    setLoading(false);

  }, [])
  
  const handleLogin = (email,password)=>{
  
    if (authData) {
      const admin = authData.admin.find((e) => e.email === email && e.password === password);
      if (admin) {
        setuser('admin');
        setloggedInUser(admin);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: 'admin', data: admin }));
        return;
      }

      const employee = authData.employees.find((e) => e.email === email && e.password === password);
      if (employee) {
        setuser('employee');
        setloggedInUser(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: 'employee', data: employee }));
        console.log(user)

        return;
      }

      alert("Invalid Credentials");
    }

  }
  if (loading) {
    return <div className='flex justify-center items-center h-screen text-7xl text-blue-700 font-semibold'>Loading...</div>;
  }
  return (
    <> 
      {!user ? <Login handleLogin ={handleLogin}/> :null}
      {user  == 'admin'? <AdminDashBoard data={loggedInUser}/> : null} 
      {user  == 'employee'? <EmployeeDahBoard employeeData={loggedInUser}/> : null} 
    </>
  )
}

export default page