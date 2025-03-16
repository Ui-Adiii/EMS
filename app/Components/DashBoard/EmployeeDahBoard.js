"use client"
import React, { useEffect, useState } from 'react';
import { TaskList, TaskListNumber, Header } from '../index';

const EmployeeDahBoard = ({ employeeData }) => {
  const [employee, setEmployee] = useState(null);
  useEffect(() => {
    // Get existing employees from localStorage
    const existingEmployees = JSON.parse(localStorage.getItem('employees')) ;
    
    // Find the employee with the matching ID
    const matchedEmployee = existingEmployees.find(emp => emp.id === employeeData.id);
    
    // Set the matched employee data to state
    setEmployee(matchedEmployee);
    console.log(matchedEmployee.tasks)
  }, [employeeData.id]);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='px-20 py-10 bg-[#1c1c1c] h-screen w-full'>
        <Header value={employee.name} />
        <TaskListNumber data={employee.taskCounts} />
        <TaskList data={employee.tasks} />
      </div>
    </>
  );
};

export default EmployeeDahBoard;