import { ToDoController } from "../controllers/todo.controller";
import { Router } from "express";

const router = Router()
const todoController = new ToDoController()

router.get("/",todoController.getAllTask)

router.post("/",todoController.createTaskRoute)

router.put("/:id",todoController.updateTask)

router.delete("/:id",todoController.deleteTask)

export default router;