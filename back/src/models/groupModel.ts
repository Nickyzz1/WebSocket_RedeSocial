import mongoose, { Schema, Document, Date } from 'mongoose';

interface IGroup extends Document {
    name : string,
    admin : string, // id of admin
    members : string[], // id of users
    createdAt : Date
}

const groupSchema : Schema = new Schema({
    name: { type: String, require: true },
    admin: { type: String, require: true },
    members: { type: String, require: true },
    createdAt: { type: Date, require: true },
});

const group = mongoose.model<IGroup>('GroupTb', groupSchema);

export default group; 
