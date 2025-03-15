import React from 'react'

const TaskListNumber = ({data}) => {
  // console.log(data)
  return (
    <div className="flex  justify-between gap-4 ">
      <div className="mt-10 py-6 px-9 rounded-xl w-[49%] bg-sky-500">
        <h2 className="text-2xl font-semibold">{data.newTask}</h2>
        <h3 className="text-3xl font-medium">New Task</h3>
      </div>
      <div className="mt-10 py-6 px-9 rounded-xl w-[49%] bg-green-500">
        <h2 className="text-2xl font-semibold">{data.completed}</h2>
        <h3 className="text-3xl font-medium">Complete Task</h3>
      </div>
      <div className="mt-10 py-6 px-9 rounded-xl w-[49%] bg-yellow-500">
        <h2 className="text-2xl font-semibold">{data.active}</h2>
        <h3 className="text-3xl font-medium">Accepted Task</h3>
      </div>
      <div className="mt-10 py-6 px-9 rounded-xl w-[49%] bg-red-500">
        <h2 className="text-2xl font-semibold">{data.failed}</h2>
        <h3 className="text-3xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
}

export default TaskListNumber