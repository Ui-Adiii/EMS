import React from 'react'

import {TaskList,TaskListNumber,Header} from '../index'
const EmployeeDahBoard = () => {
    
  return (
    <>
        <div className='px-20 py-10 bg-[#1c1c1c] h-screen w-full'>
            <Header/>
            <TaskListNumber/>
            <TaskList/>
        </div>
    </>
  )
}

export default EmployeeDahBoard