import { NextFunction, Request, Response } from "express"
import { iMessage } from "../dto/message.ts"
import jwt from "jsonwebtoken";
import User from "../models/userModel.ts"; 

export const chatMid = async (req: Request, res: Response, next: NextFunction) => {
    const data : iMessage = req.body

    if(data == null||data == undefined) {
        res.status(400).send('Informações faltantes!')
    }

    const token = req.get("Authorization")?.split(" ")[1];  // "Bearer <token>"

    if (!token) {
        return res.status(401).json({ error: "Token não fornecido" });
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET as string);  
        const user = await User.findById((decoded as any).id);

        if (!user) {
            return res.status(401).json({ error: "Usuário não encontrado" });
        }

        req.user(user)

        next();
    } catch (error) {
        return res.status(401).json({ error: "Token inválido" });
    }
}