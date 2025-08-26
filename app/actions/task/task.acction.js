import { Task, User } from "@/models";
import { connectDB } from "@/utils/connectDB";
import mongoose from "mongoose";

const createTask = async (task) => {
  try {
    await connectDB();
    
    if (!mongoose.models.Task) {
      console.error("❌ Task model not found in mongoose.models");
      console.log("📊 Available models:", Object.keys(mongoose.models));
      return { message: "Task model not available", success: false };
    }
    
    console.log("✅ Task model found:", mongoose.models.Task);
    
    const { title, description, date, assignTo, category, status } = task;
    if (
      !title ||
      !description ||
      !date ||
      !assignTo ||
      !category ||
      !status ||
      title === "" ||
      description === "" ||
      date === "" ||
      assignTo === "" ||
      category === "" ||
      status === ""
    ) {
      return { message: "All fields are required", success: false };
    }
    const user = await User.findOne({ name: assignTo.toLowerCase() });
    if (!user) {
      return {
        message: "User not found",
        success: false,
      };
    }
    const task = await Task.create({
      title,
      description,
      date,
      assignedTo: user._id,
      category,
      status,
    });
    if (!task) {
      return {
        message: "Task creation failed",
        success: false,
      };
    }
    user.tasks.push(task._id);
    await user.save();
    return {
      message: "Task created successfully",
      success: true,
      task,
    };
  } catch (error) {
    return {
      message: error.message,
      success: false,
    };
  }
};

export { createTask };
