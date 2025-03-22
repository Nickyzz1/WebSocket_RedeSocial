import mongoose, { Schema, Document, Date } from 'mongoose';

interface IMessage extends Document {
    description : string,
    adressee : string,
    created : Date,
    adresseeType : number,
    image : string
}

const messageSchema : Schema = new Schema({
    description: { type: String, require: true },
    adressee: { type: String, require: true },
    created: { type: Date, require: true },
    adresseeType: { type: Number, require: true },
    image: { type: String, require: false },
});

const message = mongoose.model<IMessage>('MessageTb', messageSchema);

export default message; 
