import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dataBaseConnection } from './db.js';
import { TodoRoutes } from './routes/to-do-routes.js';


const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
dataBaseConnection();

app.get("/",(req,res)=>{
    res.send("Working successfully")
})
app.use("/taskRoutes",TodoRoutes);
app.listen(process.env.PORT,err=>{
    if(err) console.log(err);
    else console.log("Server started at port")
})
