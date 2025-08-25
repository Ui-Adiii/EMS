import React, { useContext } from "react";

const Header = (val) => {
  const logOutUser=()=>{
  
  }
  return (
    <>
      <div className="flex items-end justify-between">
        <h1 className="text-2xl font-medium ">
          Hello <br /> <span className="text-3xl font-bold">{val.value}✌️</span>{" "}
        </h1>
        <button 
        onClick={
          logOutUser
        }
        className="bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-lg hover:bg-red-600 ">
          Log out
        </button>
      </div>
    </>
  );
};

export default Header;
