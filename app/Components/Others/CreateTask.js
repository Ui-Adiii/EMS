import React from 'react'

const CreateTask = () => {
  return (
    <>
      <div className=" p-5 bg-[#1c1c1c] mt-7  rounded-md">
        <form className="flex w-full flex-wrap p-10 items-start justify-between">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                type="text"
                placeholder="Make a UI design"
                className="mb-5 text-sm py-2 px-3 w-4/5 rounded outline-none border-2 border-gray-200"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
                type="date"
                className="mb-5 text-sm py-2 px-3 w-4/5 rounded outline-none border-2 border-gray-200"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
              <input
                type="text"
                placeholder="Employee Name"
                className="mb-5 text-sm py-2 px-3 w-4/5 rounded outline-none border-2 border-gray-200"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
                type="text"
                placeholder="Design, dev, etc"
                className="mb-5 text-sm py-2 px-3 w-4/5 rounded outline-none border-2 border-gray-200"
              />
            </div>
          </div>
          <div className="w-1/2">
            <h3 className="text-sm text-gray-300 mb-0.5">Desciption</h3>
            <textarea
              name=""
              id=""
              className="w-full h-50 border-2 border-gray-400 text-sm rounded-sm  outline-none"
            />
            <button className="text-xl w-full text-white mt-10 px-6 py-2 bg-emerald-500 rounded-full hover:bg-emerald-600  hover:cursor-pointer">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateTask