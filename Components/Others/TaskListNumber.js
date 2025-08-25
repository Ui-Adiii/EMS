import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className="flex flex-wrap  sm:justify-center gap-4 ">
    <div className="mt-2 md:mt-10 py-3 px-5 flex flex-col lg:items-center gap-3  rounded-xl w-full lg:w-1/5 bg-sky-500">
        <h2 className="text-2xl md:text-md lg:text-2xl font-semibold">{data.newTask}</h2>
        <h3 className="text-2xl md:text-md lg:text-2xl font-medium">New Task</h3>
      </div>
      <div className="mt-2 md:mt-10 py-3 px-5 flex flex-col lg:items-center gap-3  rounded-xl w-full lg:w-1/5 bg-green-500">
        <h2 className="text-2xl md:text-md lg:text-2xl font-semibold">{data.completed}</h2>
        <h3 className="text-3xl md:text-md lg:text-2xl font-medium">Complete Task</h3>
      </div>
      <div className="mt-2 md:mt-10 py-3 px-5 flex flex-col lg:items-center gap-3  rounded-xl w-full lg:w-1/5  bg-yellow-500">
        <h2 className="text-2xl md:text-md lg:text-2xl font-semibold">{data.active}</h2>
        <h3 className="text-3xl md:text-md lg:text-2xl font-medium">Accepted Task</h3>
      </div>
      <div className="mt-2 md:mt-10 py-3 px-5 flex flex-col lg:items-center gap-3  rounded-xl w-full lg:w-1/5 bg-red-500">
        <h2 className="text-2xl md:text-md lg:text-2xl font-semibold">{data.failed}</h2>
        <h3 className="text-3xl md:text-md lg:text-2xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
}

export default TaskListNumber