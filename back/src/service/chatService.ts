import Message from "../models/messageModel.ts";
import { iMessage } from "../dto/message.ts";
import jwt from "jsonwebtoken";
import User from "../models/userModel.ts"; 

class ChatService {
    async saveMessage(messageData: iMessage, token : string) {

    try {
        const decoded = jwt.verify(token, process.env.SECRET as string);  
        const user = await User.findById((decoded as any).id);

        const newMessage = new Message({
            ...messageData,
            userId: user?.id, 
        });
        await newMessage.save();
    } catch{

    }
}
 
    // Buscar mensagens por destinatário (usuário ou grupo)
    async getMessagesByAdressee(adressee: string, adresseeType: string) {
        return await Message.find({ adressee, adresseeType }).sort({ created: 1 });
    }

    async getMessageById(id: string) {
        return await Message.findById(id);
    }
}

export default new ChatService();
