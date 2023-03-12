import {model, Schema} from 'mongoose';

interface IUser{
    nickname: string
    email: string,
    password: string,
    country: string,
    city: string,
    address: string,
    number: number,
    name: string,
    surname: string,
    roles: string[]
}


const User = new Schema<IUser>({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    country: {type: String},
    city: {type: String},
    address: {type: String},
    number: {type: Number},
    name: {type: String},
    surname: {type: String},
    nickname: {type: String, required: true, unique: true},
    roles: [{type: String, ref: 'Role'}]
})


export default model<IUser>("User", User);