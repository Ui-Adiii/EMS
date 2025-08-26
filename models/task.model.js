import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
    category:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    assignedTo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    status:{
        type: String,
        enum: ["active", "newTask", "completed","failed"],
        default: "newTask"
    }
} ,{timestamps:true})
const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);

// Ensure the model is properly registered
if (!mongoose.models.Task) {
    mongoose.model("Task", taskSchema);
}

export default Task;
