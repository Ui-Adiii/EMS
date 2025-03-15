import React from 'react'

import {TaskList,TaskListNumber,Header} from '../index'
const EmployeeDahBoard = ({employeeData}) => {
  return (
    <>
        <div className='px-20 py-10 bg-[#1c1c1c] h-screen w-full'>
            <Header value={employeeData.name}/>
            <TaskListNumber data={employeeData.taskCounts}/>
            <TaskList data={employeeData}/>
        </div>
    </>
  )
}

export default EmployeeDahBoard