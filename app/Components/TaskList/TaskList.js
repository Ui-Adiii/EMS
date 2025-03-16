import React from "react";
import { AcceptTask, NewTask, CompleteTask, FailedTask } from "../index";

const TaskList = ({ data }) => {
  console.log(data); // Log data to ensure it's being passed correctly

  return (
    <div className="taskList h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10">
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
        return null; // Ensure a return value for all cases
      })}
    </div>
  );
};

export default TaskList;