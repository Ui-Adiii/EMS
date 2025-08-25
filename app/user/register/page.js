"use client";
import { registerUser } from "@/app/actions/user/user.action";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Register = () => {
  const router = useRouter();
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/user/register", user);
      console.log(response);
      if(response.data.success){
        setuser({
          name: "",
          email: "",
          password: "",
        });
        toast.success(response.data.message);
        router.push("/");
      }
      else{
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex h-screen w-full overflow-hidden items-center justify-center">
      <div className="border-2 border-emerald-600 p-5 md:p-20 rounded-xl">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <input
            name="name"
            value={user.name}
            onChange={handleChange}
            required
            className="border-2 text-xl outline-none bg-transparent mt-2 px-6 py-2 border-emerald-600 rounded-full placeholder:text-gray-500"
            type="name"
            placeholder="Enter Your Name"
          />
          <input
            value={user.email}
            name="email"
            onChange={handleChange}
            required
            className="border-2 text-xl outline-none bg-transparent mt-2 px-6 py-2 border-emerald-600 rounded-full placeholder:text-gray-500"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            name="password"
            value={user.password}
            onChange={handleChange}
            required
            className="border-2 text-xl text-white outline-none  mt-3 px-6 py-2 border-emerald-600 rounded-full placeholder:text-gray-500"
            type="password"
            placeholder="Enter Your Password"
          />
          <button className="text-xl w-full text-white mt-10 px-6 py-2 bg-emerald-500 rounded-full hover:bg-emerald-600  hover:cursor-pointer">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
