"use client"
import React, { useState } from 'react';

const CreateTask = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    date: '',
    assignTo: '',
    category: '',
    active: false,
    newTask: true,
    completed: false,
    failed: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);

    // Get existing employees from localStorage
    const existingEmployees = JSON.parse(localStorage.getItem('employees')) || [];

    // Find the employee to assign the task to
    const updatedEmployees = existingEmployees.map(employee => {
      if (employee.name === task.assignTo) {
        // Add the new task to the employee's tasks
        return {
          ...employee,
          tasks: [...employee.tasks, task]
        };
      }
      return employee;
    });

    // Save the updated employees back to localStorage
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));

    // Reset the form
    setTask({
      title: '',
      description: '',
      date: '',
      assignTo: '',
      category: ''
    });
  };

  return (
    <>
      <div className="p-3 bg-[#1c1c1c] mt-7 rounded-md">
        <form onSubmit={handleSubmit} className="flex w-full flex-wrap p-6 items-start justify-between">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                type="text"
                name="title"
                value={task.title}
                onChange={handleChange}
                placeholder="Make a UI design"
                className="mb-5 text-sm py-2 px-3 w-4/5 rounded outline-none border-2 border-gray-200"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
                type="date"
                name="date"
                value={task.date}
                onChange={handleChange}
                className="mb-5 text-sm py-2 px-3 w-4/5 rounded outline-none border-2 border-gray-200"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
              <input
                type="text"
                name="assignTo"
                value={task.assignTo}
                onChange={handleChange}
                placeholder="Employee Name"
                className="mb-5 text-sm py-2 px-3 w-4/5 rounded outline-none border-2 border-gray-200"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">category</h3>
              <input
                type="text"
                name="category"
                value={task.category}
                onChange={handleChange}
                placeholder="Design, dev, etc"
                className="mb-5 text-sm py-2 px-3 w-4/5 rounded outline-none border-2 border-gray-200"
              />
            </div>
          </div>
          <div className="w-1/2">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              name="description"
              value={task.description}
              onChange={handleChange}
              className="w-full h-50 border-2 border-gray-400 text-sm rounded-sm outline-none"
            />
            <button className="text-xl w-full text-white mt-10 px-6 py-2 bg-emerald-500 rounded-full hover:bg-emerald-600 hover:cursor-pointer">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTask;