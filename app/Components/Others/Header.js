import { AuthContext } from "@/app/Context/AuthProvider";
import React, { useContext } from "react";

const Header = () => {
  const data=useContext(AuthContext)
  return (
    <>
      <div className="flex items-end justify-between">
        <h1 className="text-2xl font-medium ">
          Hello <br /> <span className="text-3xl font-bold">Aditya ✌️</span>{" "}
        </h1>
        <button className="bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-lg hover:bg-red-600 hover:cursor-pointer">
          Log Out
        </button>
      </div>
    </>
  );
};

export default Header;
