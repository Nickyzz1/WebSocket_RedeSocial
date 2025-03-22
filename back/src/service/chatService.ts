import Message from "../models/messageModel.ts";
import { iMessage } from "../dto/message.ts";

class ChatService {
    async saveMessage(messageData: iMessage) {
        const newMessage = new Message(messageData);
        await newMessage.save();
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
