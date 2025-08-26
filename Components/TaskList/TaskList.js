import React from "react";
import { AcceptTask, NewTask, CompleteTask, FailedTask } from "../index";

const TaskList = ({ data }) => {
  if(data.length == 0) {
    return <p className="text-center mt-10">No tasks available</p>;
  }
  return (
    <div className="taskList h-[55%] overflow-x-auto flex flex-nowrap items-center justify-start  gap-5 w-full py-5 mt-10">
      {data.map((elem) => {
        if (elem.status==="active") {
          return <AcceptTask key={elem._id} data={elem} />;
        }
        if (elem.status==="failed") {
          return <FailedTask key={elem._id} data={elem} />;
        }
        if (elem.status==="completed") {
          return <CompleteTask key={elem._id} data={elem} />;
        }
        if (elem.status==="newTask") {
          return <NewTask key={elem._id} data={elem} />;
        }
        return null; 
      })}
    </div>
  );
};

export default TaskList;