import mongoose, { Schema, Document, Date } from 'mongoose';

interface IUser extends Document {
      name : string,
      email : string,
      password : string,
      image : string,
      followers : string[],
      following : string[],
      privacy  : number
}

const userSchema : Schema = new Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    privacy: { type: Number, require: true },
    image: { type: String, require: false },
    followers: { type: String, require: false },
    following: { type: String, require: false },
});

const user = mongoose.model<IUser>('UserTb', userSchema);

export default user; 
