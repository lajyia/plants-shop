import {Schema, model} from 'mongoose';

interface IRole {
    value: string
}


const Role = new Schema<IRole>({
    value: {type: String, unique: true, default: 'BUYER'}
})


export default model<IRole>('Role', Role);