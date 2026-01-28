import { ToDoController } from "../controllers/todo.controller";
import { Router } from "express";

class ToDoRouter {
  router: Router;
  private todoController = new ToDoController();

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", this.todoController.getAllTask);
    this.router.post("/", this.todoController.createTaskRoute);
    this.router.put("/:id", this.todoController.updateTask);
    this.router.delete("/:id", this.todoController.deleteTask);
  }

}

const toDoRouter = new ToDoRouter()
export default toDoRouter.router

