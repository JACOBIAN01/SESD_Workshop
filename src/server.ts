import dotenv from "dotenv";
dotenv.config()
import app from "./app"
import { ConnectDB } from "./config/db";

const PORT = process.env.PORT || 5000;
ConnectDB()

app.listen(PORT,()=>{
    console.log(`🚀 Server running on port ${PORT}`);
})
