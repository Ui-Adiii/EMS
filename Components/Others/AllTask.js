"use client"
// import { useRouter } from "next/navigation";
import React from "react";

const AllTask = ({ employees }) => {
  // const router = useRouter();

  const getTaskSummary = (tasks = []) => {
    const summary = {
      newTask: 0,
      completed: 0,
      failed: 0,
      active: 0,
    };

    tasks.forEach((task) => {
      if (summary[task.status] !== undefined) {
        summary[task.status] += 1;
      }
    });

    return summary;
  };

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
        const summary = getTaskSummary(elem.tasks);

        return (
          <div
            key={elem._id}
            // onClick={() => router.push(`/${elem._id}`)}
            className="border-2 border-emerald-400 mb-2 text-center py-2 px-4 flex justify-between"
          >
            <h2 className="w-1/5 text-lg font-medium ">{elem.name}</h2>
            <h3 className="w-1/5 text-lg font-medium" style={{ color: "blue" }}>
              {summary.newTask}
            </h3>
            <h5 className="w-1/5 text-lg font-medium" style={{ color: "yellow" }}>
              {summary.active}
            </h5>
            <h5 className="w-1/5 text-lg font-medium">
              {summary.completed}
            </h5>
            <h5 className="w-1/5 text-lg font-medium" style={{ color: "red" }}>
              {summary.failed}
            </h5>
          </div>
        );
      })}
    </div>
  );
};

export default AllTask;
