import React from "react";

const NewTask = () => {
  return (
    <div className="flex-shrink-0 p-5 h-full w-[300px] bg-pink-400 rounded-xl">
      <div className="flex align-center justify-between ">
        <h3 className="bg-red-500 text-md font-medium w-fit px-3 py-1 rounded-lg">
          High
        </h3>
        <h4 className="text-sm font-semibold">12 mar 2025</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">Make a React Project</h2>
      <p className="text-sm mt-2 font-medium">
        Hi Kaise ho app sabhi log umid kartahun ache honge
      </p>
    </div>
  );
};

export default NewTask;
