import { Request,Response } from "express";
import { UserService } from "../services/UserService";

export class UserController{

    private userService = new UserService();

    getUsers = async(req:Request,res:Response) =>{
        const users = await this.userService.getAllUser();
        res.json(users);
    }


    createUser = async(req:Request,res:Response)=>{
        const user = await this.userService.createUser(req.body);
        res.status(201).json(user);
    }

    getUser = async(req:Request,res:Response)=>{
        const user = await this.userService.getUserByID(req.params.id as string);
        res.json(user);
    }

    updateUser = async(req:Request,res:Response)=>{
        const user = this.userService.updateUser(req.params.id as string,req.body);
        res.json(user);
    }
    deleteUser = async(req:Request,res:Response)=>{
        await this.userService.deleteUser(req.params.id as string);
        res.json({ message: "User deleted" });
    }

}