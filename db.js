import mongoose from "mongoose";

export function dataBaseConnection(){
    const params = {
        useNewUrlparser:true,
        useUnifiedTopology:true,
    };
    try {
        mongoose.connect(process.env.Mongo_Url,params)
        console.log("DB is connected")
    } catch (error) {
        console.log("Error",error)
    }
}