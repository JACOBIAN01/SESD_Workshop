import {Schema , model , Document} from "mongoose";

export interface IUser extends Document{
    name:string;
    age:number;
    email:string;
}

const UserSchema = new Schema<IUser>({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    email:{type:String,required:true,unique:true}
})

export const UserModel = model<IUser>("User",UserSchema);
