"use client"
import React, { useState } from "react";
const AllTask = ({employees}) => {
  return (
    <div className=" bg-[#1c1c1c] p-5 mt-2 rounded-md ">
      <div className="bg-red-400 mb-2 text-center  py-2 px-4 flex justify-between">
        <h2 className="w-1/5 text-sm  md:text-lg  font-normal md:font-medium">Employee Name</h2>
        <h3 className="w-1/5 text-sm  md:text-lg  font-normal md:font-medium">New Task</h3>
        <h5 className="w-1/5 text-sm  md:text-lg  font-normal md:font-medium">Active Task</h5>
        <h5 className="w-1/5 text-sm  md:text-lg  font-normal md:font-medium">Complete Task</h5>
        <h5 className="w-1/5 text-sm  md:text-lg  font-normal md:font-medium">Failed Task</h5>
      </div>
      
        {employees.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="border-2 border-emerald-400 mb-2 text-center  py-2 px-4 flex justify-between"
            >
              <h2 className="w-1/5 text-lg font-medium ">{elem.name }</h2>
              <h3 className="w-1/5 text-lg font-medium" style={{ color: "blue" }}>
                {elem.tasks.newTask || 0}
              </h3>
              <h5 className="w-1/5 text-lg font-medium" style={{ color: "yellow" }}>
              {elem.tasks.active || 0}
              </h5>
              <h5 className="w-1/5 text-lg font-medium">
              {elem.tasks.completed || 0 }
              </h5>
              <h5 className="w-1/5 text-lg font-medium" style={{ color: "red" }}>
              {elem.tasks.failed || 0}
              </h5>
            </div>
          );
        })}
      
    </div>
  );
};

export default AllTask;
