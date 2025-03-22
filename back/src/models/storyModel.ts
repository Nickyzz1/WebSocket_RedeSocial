import mongoose, { Schema, Document, Date } from 'mongoose';

interface IStory extends Document {
    image : string,
    owner : string,
    createdAt : Date,
    expiresAt : Date,
    mentions : string[]
}

const storySchema : Schema = new Schema({
    image: { type: String, require: true },
    owner: { type: String, require: true },
    mentions: { type: String, require: false},
    createdAt: { type: Date, require: true },
    expiresAt: { type: Date, require: true },
});

const story = mongoose.model<IStory>('StoryTb', storySchema);

export default story; 
