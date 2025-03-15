import React from 'react'

const AcceptTask = () => {
  return (
    <div className="flex-shrink-0 p-5 h-full w-[300px] flex flex-col justify-between bg-pink-400 rounded-xl">
        <div className="flex align-center justify-between ">
          <h3 className="bg-red-500 text-md font-medium w-fit px-3 py-1 rounded-lg">
            Category
          </h3>
          <h4 className="text-sm font-semibold">12 mar 2025</h4>
        </div>
        <div>
        <h2 className="mt-5 text-2xl font-semibold">Make a React Project</h2>
        <p className="text-sm mt-2 font-medium">
          Hi Kaise ho app sabhi log umid kartahun ache honge
        </p>
        </div>
        <div className='flex justify-between items-center mt-8 px-6 py-2'>
            <button className='px-4 py-[5px] bg-green-600 rounded-xl text-sm font-semibold '>Completed</button>
            <button className='px-4 py-[5px] bg-red-600 rounded-xl text-sm font-semibold'>Failed</button>
        </div>
      </div>
  )
}

export default AcceptTask