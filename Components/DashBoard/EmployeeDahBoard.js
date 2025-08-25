"use client"
import React, { useEffect, useState } from 'react';
import { TaskList, TaskListNumber, Header } from '../index';

const EmployeeDahBoard = ({ employee }) => {
  if (!employee) {
    return <div>Loading...</div>;
  }
  console.log(employee)
  const taskCounts = {
    newTask: employee.tasks.filter(task => task.newTask).length,
    active: employee.tasks.filter(task => task.active).length,
    completed: employee.tasks.filter(task => task.completed).length,
    failed: employee.tasks.filter(task => task.failed).length,
  };
  return (
    <>
      <div className='px-5 md:px-20 py-2 md:py-10 bg-[#1c1c1c] h-screen w-full'>
        <Header name={employee.name} />
        <TaskListNumber data={taskCounts} />
        <TaskList data={employee.tasks} />
      </div>
    </>
  );
};

export default EmployeeDahBoard;