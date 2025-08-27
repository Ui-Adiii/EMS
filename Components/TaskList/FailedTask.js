import React from "react";

const FailedTask = ({data,formatted}) => {
  return (
    <div className="flex-shrink-0 flex flex-col justify-between p-5 h-full w-[300px] bg-red-400 rounded-xl">
      <div className="flex align-center justify-between ">
        <h3 className="bg-red-500 text-md font-medium w-fit px-3 py-1 rounded-lg">
        {data.category}
        </h3>
        <h4 className="text-sm font-semibold">{formatted}</h4>
      </div>
      <div className='text-center'> 
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
        <p className="text-sm mt-5 font-medium">
        {data.description}
        </p>
      </div>
      <div className="flex justify-center  items-center mt-8">
        <div className="px-4 py-2 bg-red-600 text-center rounded-xl text-sm font-semibold w-full ">
          Failed
        </div>
      </div>
    </div>
  );
};

export default FailedTask;
