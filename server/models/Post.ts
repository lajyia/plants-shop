import {model, Schema} from 'mongoose';

interface IPost{
    date: string,
    time: string,
    title: string,
    body: string,
    image: string
}


const Post = new Schema<IPost>({
    date: {type: String, required: true},
    time: {type: String, required: true},
    title: {type: String, required: true, unique: true},
    body: {type: String, required: true},
    image: {type: String, required: true}
})


export default model<IPost>('Post', Post);