import React from "react";
import { Header,CreateTask ,AllTask} from "../index";
const AdminDashBoard = ({data=null}) => {
  return (
    <div className="h-screen w-full px-3 md:p-10">
      <Header value={data.name} />
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default AdminDashBoard;
