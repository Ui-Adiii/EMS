"use client";
import { loginStart, loginSuccess, loginFailed } from "@/store/features/userSlice";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Button } from "@/Components";
const Login = () => {
  const { loading, error, isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const submitHanler = async (event) => {
    event.preventDefault();
    dispatch(loginStart());
    try {
      event.preventDefault();
     const response = await axios.post("/api/user/login", {email,password});
      if(response.data.success){
        dispatch(loginSuccess(response.data.user));
        toast.success(response.data.message);
        router.push("/");
      }
      else{
        dispatch(loginFailed(response.data.message));
        toast.error(error)
      }
      
    } catch (error) {
      dispatch(loginFailed(error.message));
      toast.error(error);
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden items-center justify-center">
      <div className="border-2 border-emerald-600 p-5 md:p-20 rounded-xl">
        <form
          onSubmit={submitHanler}
          className="flex flex-col items-center justify-center"
        >
          <input
          name="email"
            value={email} 
            onChange={(e) => setemail(e.target.value)}
            required
            className="border-2 text-xl outline-none bg-transparent mt-2 px-6 py-2 border-emerald-600 rounded-full placeholder:text-gray-500"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
          name="password"
            value={password}
            onChange={(e) =>setpassword(e.target.value)}
            required
            className="border-2 text-xl text-white outline-none  mt-3 px-6 py-2 border-emerald-600 rounded-full placeholder:text-gray-500"
            type="password"
            placeholder="Enter Your Password"
          />
          <Button 
            type="submit"
            loading={loading}
            className="text-xl w-full mt-10"
          >
            {loading ? "Logging in..." : "Log in"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
