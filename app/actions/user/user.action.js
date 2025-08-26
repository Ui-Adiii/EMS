"use server";
import User from "@/models/user.model";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";
const { connectDB } = require("@/utils/connectDB");
import jwt from "jsonwebtoken";
const registerUser = async (formData) => {
  try {
    await connectDB();
    const { email, name, password } = formData;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return {
        message: "User already exists",
        success: false,
      };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    if (!hashedPassword) {
      return {
        message: "Error hashing password",
        success: false,
      };
    }
    const user = await User.create({
      email,
      name,
      password: hashedPassword,
    });
    const plainUser = JSON.parse(JSON.stringify(user));
    return {
      message: "User registered successfully",
      success: true,
      user: plainUser,
    };
  } catch (error) {
    return {
      message: error.message,
      success: false,
    };
  }
};

const loginUser = async (formData) => {
  try {
    await connectDB();
    const { email, password } = formData;
    if (!email || !password || email === "" || password === "") {
      return {
        message: "All fields are required",
        success: false,
      };
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return {
        message: "User not found",
        success: false,
      };
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return {
        message: "Invalid credentials",
        success: false,
      };
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    const cookieStore = cookies();
    cookieStore.set("access_token", token, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    cookieStore.set("role", user.role || "user", {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24,
    });
    const plainUser = JSON.parse(JSON.stringify(user));

    return {
      success: true,
      message: "Login successful",
      user: plainUser,
    };
  } catch (error) {
    return {
      message: error.message,
      success: false,
    };
  }
};

const logOut = async ()=>{
  try {
    const cookieStore = cookies();
    cookieStore.set("access_token", "", {
      httpOnly: true,
      path: "/",
      maxAge: 0,
    });
    cookieStore.set("role", "", {
      httpOnly: true,
      path: "/",
      maxAge: 0,
    });
    return {
      user:null,
      message:"Logout successful",
      success:true
    }
  } catch (error) {
    return {
      message:error.message,
      success:false
    }
  }
}

const getCurrentUser = async (userId) => {
  try {
    await connectDB();
    const user = await User.findById(userId);
    if (!user) {
      return {
        message: "User not found",
        success: false,
      };
    }
    const plainUser = JSON.parse(JSON.stringify(user));
    return {
      message: "User retrieved successfully",
      success: true,
      user: plainUser,
    };
  } catch (error) {
    return {
      message: error.message,
      success: false,
    };
  }
};

const getUsersByRole= async(role="user")=>{
  try {
    const users = await User.find({role});
    return {
      users,
      message:"fetched users",
      success:true
    }
  } catch (error) {
    return {
      message:error.message,
      success:false
    }
  }
}

export { registerUser, loginUser, logOut,getCurrentUser ,getUsersByRole};
