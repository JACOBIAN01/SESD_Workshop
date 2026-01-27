import { Request,Response } from "express";
import { UserService } from "../services/UserService";

export class UserController{

    private userService = new UserService();

    getUser = async(req:Request,res:Response) =>{
        const users = await this.userService.getAllUser();
        res.json(users);
    }

}