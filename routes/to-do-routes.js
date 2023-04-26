import express from 'express';
import Task from '../models/Tasks.js';

const router = express.Router();

router.post("/new",async(req,res)=>{
    const newTask = await new Task({
        todo:req.body.todo,
        isComplete:false
    }).save();

    res.status(201).send(newTask);
})
router.get("/all",async(req,res)=>{
    let allTasks = await Task.find({});
    res.status(200).json(allTasks);
});
router.get("/:id",async(req,res)=>{
    try {
        let task = await Task.findOne({_id:req.params.id});
        res.status(200).json(task);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
    
})


router.put("/edit/:id",async(req,res)=>{
    try {
        let taskToEdit = await Task.findOneAndUpdate({_id:req.params.id},{isComplete:req.body.isComplete,todo:req.body.todo});
        res.status(200).send("Updated SuccessFully");
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
    
})

router.delete("/remove/:id",async(req,res)=>{
    try {
        let taskToDelete = await Task.findByIdAndDelete({_id:req.params.id})
        res.status(200).send(taskToDelete);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
    
})

export const TodoRoutes = router;