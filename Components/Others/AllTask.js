import { AuthContext } from "@/Context/AuthProvider";
import React, { useContext } from "react";
const AllTask = () => {
  const authData = useContext(AuthContext);
  return (
    <div className=" bg-[#1c1c1c] p-5 mt-2 rounded-md ">
      <div className="bg-red-400 mb-2 text-center  py-2 px-4 flex justify-between">
        <h2 className="w-1/5 text-sm  md:text-lg  font-normal md:font-medium">Employee Name</h2>
        <h3 className="w-1/5 text-sm  md:text-lg  font-normal md:font-medium">New Task</h3>
        <h5 className="w-1/5 text-sm  md:text-lg  font-normal md:font-medium">Active Task</h5>
        <h5 className="w-1/5 text-sm  md:text-lg  font-normal md:font-medium">Complete Task</h5>
        <h5 className="w-1/5 text-sm  md:text-lg  font-normal md:font-medium">Failed Task</h5>
      </div>
      
        {authData.employees.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="border-2 border-emerald-400 mb-2 text-center  py-2 px-4 flex justify-between"
            >
              <h2 className="w-1/5 text-lg font-medium ">{elem.name}</h2>
              <h3 className="w-1/5 text-lg font-medium" style={{ color: "blue" }}>
                {elem.taskCounts.newTask}
              </h3>
              <h5 className="w-1/5 text-lg font-medium" style={{ color: "yellow" }}>
              {elem.taskCounts.active}
              </h5>
              <h5 className="w-1/5 text-lg font-medium">
              {elem.taskCounts.completed}
              </h5>
              <h5 className="w-1/5 text-lg font-medium" style={{ color: "red" }}>
              {elem.taskCounts.failed}
              </h5>
            </div>
          );
        })}
      
    </div>
  );
};

export default AllTask;
