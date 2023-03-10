import {model, Schema} from 'mongoose';

interface IUser{
    email: string,
    password: string,
    country: string,
    city: string,
    address: string,
    number: number,
    name: string,
    surname: string
}


const User = new Schema<IUser>({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    country: {type: String},
    city: {type: String},
    address: {type: String},
    number: {type: Number},
    name: {type: String, required: true},
    surname: {type: String, required: true}
})


export default model<IUser>("User", User);