import mongoose from "mongoose";

export const ConnectDB = async ()=>{
    const uri = process.env.MONGO_URI
    try{
        mongoose.connect(uri as string)
        console.log("MongoDB Connected");
    }catch(err){
        console.error(err);
    }
}