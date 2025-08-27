"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "@/Components";

const CreateTask = ({ fetchUsers }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    date: "",
    assignTo: "",
    category: "",
    status: "newTask",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/api/task/create", task);
      if(response.data.success){
        toast.success(response.data.message);
        setTask({
          title: "",
          description: "",
          date: "",
          assignTo: "",
          category: "",
          status: "newTask",
        });
        fetchUsers();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create task");
    } finally {
      setLoading(false);
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

            <Button 
              type="submit"
              loading={loading}
              className="text-xl w-full"
            >
              {loading ? "Creating Task..." : "Create Task"}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTask;
