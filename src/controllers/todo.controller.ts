import { ToDoService } from "../services/todo.services";
import { Request, Response } from "express";

export class ToDoController {
  private todoService = new ToDoService();

  createTaskRoute = async (req: Request, res: Response) => {
    const task = await this.todoService.createTask(req.body);
    res.status(201).json(task);
  };

  getAllTask = async (req: Request, res: Response) => {
    const task = await this.todoService.getAllTask();
    res.json(task);
  };

  deleteTask = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const deletedTask = await this.todoService.DeleteData(id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted successfully" });
  };

  updateTask = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const updatedTask = await this.todoService.UpdateTask(id, req.body);

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(updatedTask);
  };
}
