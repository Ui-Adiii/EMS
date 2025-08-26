"use client"
import React, { useEffect, useState } from "react";
import { Header,CreateTask ,AllTask} from "../index";
import axios from "axios";
import { toast } from "react-toastify";
const AdminDashBoard = ({data=null}) => {
  const [employees, setEmployees] = useState([]);
  const fetchUsers = async ()=>{

    try {
      const response = await axios.get("/api/user/users");
      console.log(response.data);
      if(response.data.success){
        setEmployees(response.data.users);
      }
      else{
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
  useEffect(() => {
    fetchUsers();
  }, [])

  return (
    <div className="h-screen w-full px-3 md:p-10">
      <Header name={data.name} />
      <CreateTask/>
      <AllTask employees={employees}/>
    </div>
  );
};

export default AdminDashBoard;
