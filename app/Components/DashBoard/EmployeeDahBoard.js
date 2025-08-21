"use client"
import React, { useEffect, useState } from 'react';
import { TaskList, TaskListNumber, Header } from '../index';

const EmployeeDahBoard = ({ employeeData }) => {
  const [employee, setEmployee] = useState(null);
  useEffect(() => {
    const existingEmployees = JSON.parse(localStorage.getItem('employees')) ;
    
    const matchedEmployee = existingEmployees.find(emp => emp.id === employeeData.id);
    setEmployee(matchedEmployee);
    console.log(matchedEmployee.tasks)
  }, [employeeData.id]);

  if (!employee) {
    return <div>Loading...</div>;
  }
  const taskCounts = {
    newTask: employee.tasks.filter(task => task.newTask).length,
    active: employee.tasks.filter(task => task.active).length,
    completed: employee.tasks.filter(task => task.completed).length,
    failed: employee.tasks.filter(task => task.failed).length,
  };
  return (
    <>
      <div className='px-5 md:px-20 py-2 md:py-10 bg-[#1c1c1c] h-screen w-full'>
        <Header value={employee.name} />
        <TaskListNumber data={taskCounts} />
        <TaskList data={employee.tasks} />
      </div>
    </>
  );
};

export default EmployeeDahBoard;