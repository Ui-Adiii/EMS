import React from "react";
import { AcceptTask, NewTask, CompleteTask, FailedTask } from "../index";

const TaskList = ({ data }) => {
  if(data.length == 0) {
    return <p className="text-center mt-10">No tasks available</p>;
  }
  return (
    <div className="taskList h-[55%] overflow-x-auto flex flex-nowrap items-center justify-start  gap-5 w-full py-5 mt-10">
      {data.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} />;
        }
        return null; 
      })}
    </div>
  );
};

export default TaskList;