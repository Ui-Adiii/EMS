"use client"
import React from 'react';
import { TaskList, TaskListNumber, Header } from '../index';

const EmployeeDahBoard = ({ employee ,fetchUserData}) => {
  if (!employee) {
    return <div>Loading...</div>;
  }
  const taskCounts = {
    newTask: employee.tasks.filter(task => task.status === 'newTask').length,
    active: employee.tasks.filter(task => task.status === 'active').length,
    completed: employee.tasks.filter(task => task.status === 'completed').length,
    failed: employee.tasks.filter(task => task.status === 'failed').length,
  };
  return (
    <>
      <div className='px-5 md:px-20 py-2 md:py-10 bg-[#1c1c1c] h-screen w-full'>
        <Header name={employee.name} />
        <TaskListNumber data={taskCounts} />
        <TaskList fetchUserData={fetchUserData} data={employee.tasks} />
      </div>
    </>
  );
};

export default EmployeeDahBoard;