const { default: Task } = require("@/models/task.model");
const { default: User } = require("@/models/user.model");

const createTask = async (task) => {
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
  try {
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
    console.log(task);
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
