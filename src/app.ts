import express from "express";
import mongoose from "mongoose";
import useRouter from "./routes/todo.routes"

interface App_Interface {
    startServer():void;
    connectDB():void;
    initializeRoutes():void;
}

class App implements App_Interface{
    public app:express.Application;
    public port:number;

    constructor(){
        this.port=4000;
        this.app = express();
        this.connectDB()
        this.initializeRoutes()
    }
    public startServer():void{
        this.app.listen(this.port,()=>{
            console.log(`Server Listening on http://localhost:${this.port}`);
        })
    }

    public async connectDB():Promise<void>{
        try{
            await mongoose.connect("mongodb+srv://subhadeepghorai23:Subha%40%282003%29@cluster0.q7s49m5.mongodb.net/SESD_DB?retryWrites=true&w=majority&appName=SESD")
            console.log("Database Connected!");
        }catch(err){
            console.log(err);
        }
    }
    public initializeRoutes():void{
        this.app.use(express.json())
        this.app.use("/",useRouter);
    }
}

export {App}