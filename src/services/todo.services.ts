import { ToDoModel, I_ToDo } from "../schema/todo.schema";

export class ToDoService {
  async createTask(data: { title: String }) {
    return await ToDoModel.create(data);
  }

  async getAllTask() {
    return await ToDoModel.find();
  }

  async UpdateTask(id: String, data: { title: String }) {
    return await ToDoModel.findByIdAndUpdate(id, data, { new: true });
  }

  async DeleteData(id: String) {
    return await ToDoModel.findByIdAndDelete(id);
  }
}
