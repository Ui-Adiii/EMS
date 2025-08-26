"use client";
import { TaskList } from "@/Components";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const UserDataPage = () => {
  const { employees} = useSelector((state) => state.employees);
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!id) return;
    employees.filter((emp)=>emp._id===id).map((emp)=>setUser(emp));
  }, [id]);

  if (!user) {
    return <p className="text-center pt-20">Loading user data...</p>;
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{user.name}'s Tasks</h1>
      <hr className="my-4" />
    </div>
  );
};

export default UserDataPage;
