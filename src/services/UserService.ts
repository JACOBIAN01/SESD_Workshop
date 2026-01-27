import {IUser , UserModel} from "../models/User";



export class UserService {

    async getAllUser(){
        return await UserModel.find();
    }

    async createUser(data:IUser){
        return await UserModel.create(data);
    }

    async getUserByID(id:string){
        return await UserModel.findById(id);
    }

    async updateUser(id:string,data:IUser){
        return await UserModel.findByIdAndUpdate(id,data,{new:true}); 
    }
    async deleteUser(id:string){
        return UserModel.findByIdAndDelete(id);
    }
}