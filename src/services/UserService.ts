import {IUser , UserModel} from "../models/User";



export class UserService {

    async getAllUser(){
        return await UserModel.find();
    }
}