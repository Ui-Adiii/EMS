import React from "react";
import { Header,CreateTask ,AllTask} from "../index";
const AdminDashBoard = () => {
  return (
    <div className="h-screen w-full p-10">
      <Header />
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default AdminDashBoard;
