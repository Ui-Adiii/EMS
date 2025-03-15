"use client"
import React, {  useContext, useEffect, useState } from 'react'
import {Login,EmployeeDahBoard,AdminDashBoard,setLocalStorage,getLocalStorage} from '../app/Components/index'
import { AuthContext } from './Context/AuthProvider'
const page = () => {

  
  const [user, setuser] = useState(null)
  const authData=useContext(AuthContext)
  const [loggedInUser, setloggedInUser] = useState(null)
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLocalStorage() //Setting the data
    setLoading(false)
  }, [])
  
  // useEffect(() => {
  //   const loggedInUser=JSON.parse(localStorage.getItem("loggedInUser"))
  //   if(authData){
  //     setuser(loggedInUser.role)
  //   }
  // }, [authData])
  
  const handleLogin = (email,password)=>{
    if(authData  && authData.admin.find((e)=> email ==e.email && password==e.password)){
        setuser('admin')
        localStorage.setItem("loggedInUser",JSON.stringify({role:'admin'}))
    }
    else if(authData){
        const employee= authData.employees.find((e)=> email==e.email && password==e.password)
        if(employee){
          setloggedInUser(employee)
          setuser('employee')
          localStorage.setItem("loggedInUser",JSON.stringify({role:'employee'}))
        }
      
    }
    else{
      alert("Invalid Credentials");
    }
  }
  if (loading) {
    return <div className='flex justify-center items-center h-screen text-7xl text-blue-700 font-semibold'>Loading...</div>;
  }
  return (
    <> 
      {!user ? <Login handleLogin ={handleLogin}/> :null}
      {user  == 'admin'? <AdminDashBoard/> : null} 
      {user  == 'employee'? <EmployeeDahBoard employeeData={loggedInUser}/> : null} 
    </>
  )
}

export default page