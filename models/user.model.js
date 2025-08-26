import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        select:false
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    tasks:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Task"
        }
    ]
},{timestamps:true})
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;