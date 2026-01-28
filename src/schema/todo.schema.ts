import {Schema ,Document , model} from "mongoose"

export interface I_ToDo extends Document{
    title:String;
}

const ToDoSchema =  new Schema<I_ToDo>({title:{type:String}})

export const ToDoModel = model("task",ToDoSchema);

