"use client";
import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const submitHanler = (event) => {
    event.preventDefault();
    // console.log(email);
    // console.log(password);
    handleLogin(email,password)
    setemail("");
    setpassword("");
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          // onSubmit={(e)=>{
          //   submitHanler(e)
          // }}
          onSubmit={submitHanler}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email} //its required for clear the form
            onChange={(e) => setemail(e.target.value)}
            required
            className="border-2 text-xl outline-none bg-transparent mt-2 px-6 py-2 border-emerald-600 rounded-full placeholder:text-gray-500"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required
            className="border-2 text-xl text-white outline-none  mt-3 px-6 py-2 border-emerald-600 rounded-full placeholder:text-gray-500"
            type="password"
            placeholder="Enter Your Password"
          />
          <button className="text-xl w-full text-white mt-10 px-6 py-2 bg-emerald-500 rounded-full hover:bg-emerald-600  hover:cursor-pointer">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
