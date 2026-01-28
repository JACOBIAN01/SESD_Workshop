import { ToDoController } from "../controllers/todo.controller";
import { Router } from "express";

export class ToDoRouter {
  private router = Router();
  private todoController = new ToDoController();

  constructor() {
    this.router.get("/", this.todoController.getAllTask);

    this.router.post("/", this.todoController.createTaskRoute);

    this.router.put("/:id", this.todoController.updateTask);

    this.router.delete("/:id", this.todoController.deleteTask);
  }
}


