"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const CreateTask = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    date: "",
    assignTo: "",
    category: "",
    status: "newTask",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response=await axios.post("/api/task/create", task);
    if(response.data.success){
      toast.success(response.data.message)
      setTask({
        title: "",
        description: "",
        date: "",
        assignTo: "",
        category: "",
        status: "newTask",
      })
    }
    else{
      toast.error(response.data.message)
    }
  };

  return (
    <>
      <div className="p-3 bg-[#1c1c1c] mt-7 rounded-md ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row w-full flex-wrap p-6 items-start justify-between"
        >
          <div className="w-full md:w-1/2 ">
            <div>
              <h3 className="text-md md:text-lg font-medium text-gray-300 mb-0.5 capitalize">
                Task Title
              </h3>
              <input
                type="text"
                name="title"
                value={task.title}
                onChange={handleChange}
                placeholder="Make a UI design"
                className="mb-5 text-sm py-3 md:py-2 px-5 md:px-3  w-full md:w-4/5 rounded outline-none border-2 border-gray-200"
              />
            </div>
            <div>
              <h3 className="text-md md:text-lg font-medium text-gray-300 mb-0.5 capitalize">
                Date
              </h3>
              <input
                type="date"
                name="date"
                value={task.date}
                onChange={handleChange}
                className="mb-5 text-sm py-3 md:py-2 px-5 md:px-3  w-full md:w-4/5 rounded outline-none border-2 border-gray-200"
              />
            </div>
            <div>
              <h3 className="text-md md:text-lg font-medium text-gray-300 mb-0.5 capitalize">
                Assign To
              </h3>
              <input
                type="text"
                name="assignTo"
                value={task.assignTo}
                onChange={handleChange}
                placeholder="Employee Name"
                className="mb-5 text-sm py-3 md:py-2 px-5 md:px-3   w-full md:w-4/5 rounded outline-none border-2 border-gray-200"
              />
            </div>
            <div>
              <h3 className="text-md md:text-lg font-medium text-gray-300 mb-0.5 capitalize">
                category
              </h3>
              <input
                type="text"
                name="category"
                value={task.category}
                onChange={handleChange}
                placeholder="Design, dev, etc"
                className="mb-5 text-sm  py-3 md:py-2 px-5 md:px-3  w-full md:w-4/5 rounded outline-none border-2 border-gray-200"
              />
            </div>
          </div>
          <div className="w-full  md:w-1/2 flex flex-col ">
            <h3 className="text-md md:text-lg font-medium text-gray-300 mb-0.5 capitalize">
              Description
            </h3>
            <textarea
              name="description"
              value={task.description}
              onChange={handleChange}
              className="w-full h-50 border-2 mb-5 border-gray-400 text-sm rounded-sm outline-none"
            />

            <button className="text-xl w-full text-white  px-6 py-2 bg-emerald-500 rounded-full hover:bg-emerald-600 hover:cursor-pointer">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTask;
