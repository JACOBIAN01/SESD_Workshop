import express from "express";
import UserRoutes from "./routes/user.routes";
import { json } from "node:stream/consumers";

const app = express()
app.use(express.json())


app.use("/users",UserRoutes)



export default app;




