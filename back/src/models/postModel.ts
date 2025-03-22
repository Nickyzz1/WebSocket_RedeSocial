import mongoose, { Schema, Document, Date } from 'mongoose';
import { icomment } from '../dto/comment.ts';

interface IPost extends Document {
    title : string,
    content : string,
    image : string,
    owner : string, // id owner of post
    likes : string[], // users id who liked thats
    comments : icomment[],
    createdAt : Date
}

const commentSchema = new Schema<icomment>({
    userId: { type: String, required: true }, // who comments
    description: { type: String, required: true },
    likes: { type: Number, default: 0 }, // quantity of likes
    createdAt: { type: Date, default: Date.now }
});


const postSchema: Schema = new Schema({
    title: { type: String, require: false },
    content: { type: String, require: true },
    owner: { type: String, require: true },
    createdAt: { type: Date, require: true },
    image: { type: String, require: false },
    likes : {type: String, require: false},
    comments: {type: [commentSchema], require: false}
});

const post = mongoose.model<IPost>('PostTb', postSchema);

export default post;