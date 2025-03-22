import { Request, Response } from "express"
import chatService from "../service/chatService.ts"
import { iMessage } from "../dto/message.ts";

export const createMessage = async(req: Request, res: Response) => {
    try {
        await chatService.saveMessage(req.body);
        res.status(201).send("Mensagem criada com sucesso")
    } catch (error) {
        res.status(500).send("Erro no servidor")
    }
}

export const getMessage = async(req: Request, res: Response) => {
    try {
        const message = await chatService.getMessageById(req.params.id)
        res.status(201).json(message)
    } catch (error) {
        res.status(500).send("Erro no servidor")
    }
}

export const getMessagesByAdressee = async(req: Request, res: Response) => {
    try {
        const data : iMessage = req.body
        const message  = await chatService.getMessagesByAdressee(data.adressee, data.adresseeType )
        res.status(201).json(message)
    } catch (error) {
        res.status(500).send("Erro no servidor")
    }
}