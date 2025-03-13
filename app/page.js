"use client"
import React, {  useContext, useEffect, useState } from 'react'
import {Login,EmployeeDahBoard,AdminDashBoard,setLocalStorage,getLocalStorage} from '../app/Components/index'
import { AuthContext } from './Context/AuthProvider'
const page = () => {

  useEffect(() => {
    //setLocalStorage() //Setting the data
    getLocalStorage()
  }, [])
  
  const data=useContext(AuthContext)
  const authData=JSON.parse(data)
  const [user, setuser] = useState(null)

  const handleLogin = (email,password)=>{
    if(authData && authData.admin.find((e)=> email ==e.email)){
      setuser('admin')
    }
    else if(authData && authData.employees.find((e)=> email==e.email)){
      setuser('employee')
    }
    else{
      alert("Invalid Credentials");
    }
  }
  return (
    <>
      {!user ? <Login handleLogin ={handleLogin}/> :null}
      {user  == 'admin'? <AdminDashBoard/> : null} 
      {user  == 'employee'? <EmployeeDahBoard/> : null} 
    </>
  )
}

export default page