import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
    {
        todo:String,
        isComplete:Boolean,
    }
)
const Task = mongoose.model("task",taskSchema);
export default Task;