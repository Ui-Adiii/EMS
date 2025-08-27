import React, { useEffect, useState } from "react";
import { AcceptTask, NewTask, CompleteTask, FailedTask } from "../index";
import { toast } from "react-toastify";
import axios from "axios";

const TaskList = ({ data, fetchUserData }) => {
  if (data.length == 0) {
    return <p className="text-center mt-10">No tasks available</p>;
  }
  const handleSubmit = async (id, status) => {
    try {
      const response = await axios.patch(`/api/task/update`, { id, status });
      if (response.data.success) {
        fetchUserData();
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="taskList h-[55%] overflow-x-auto flex flex-nowrap items-center justify-start  gap-5 w-full py-5 mt-10">
      {[...data].reverse().map((elem) => {
        const date = new Date(elem.date);
        const formatted = date.toISOString().split("T")[0];
        if (elem.status ===   "active") {
          return (
            <AcceptTask
              formatted={formatted}
              handleSubmit={handleSubmit}
              fetchUserData={fetchUserData}
              key={elem._id}
              data={elem}
            />
          );
        }
        if (elem.status === "failed") {
          return (
            <FailedTask
              formatted={formatted}
              handleSubmit={handleSubmit}
              fetchUserData={fetchUserData}
              key={elem._id}
              data={elem}
            />
          );
        }
        if (elem.status === "completed") {
          return (
            <CompleteTask
              formatted={formatted}
              handleSubmit={handleSubmit}
              fetchUserData={fetchUserData}
              key={elem._id}
              data={elem}
            />
          );
        }
        if (elem.status === "newTask") {
          return (
            <NewTask
              formatted={formatted}
              handleSubmit={handleSubmit}
              fetchUserData={fetchUserData}
              key={elem._id}
              data={elem}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default TaskList;
