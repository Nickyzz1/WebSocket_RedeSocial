import express, { NextFunction, Request, Response, Router } from 'express';
import { iUser } from '../dto/user.ts';
import User from '../models/userModel.ts';

export const loginMid = async (req: Request, res : Response, next: NextFunction)  => {

    try {
        const data : iUser = req.body
        if(data == null || data == undefined) {
            res.status(400).send("Informações faltantes")
            return
        }
    
        const user = await User.findOne({email: data.email});
    
        if(!user)
            return res.status(404).send({ message: "Usuário não encontrado" });
    
        if (!process.env.SECRET) {
            res.status(500).send("A chave não está configurada.");
            return
       }
    
       const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET);
       const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
    
       if (decryptedPassword !== data.password) {
            res.status(401).send("Senha incorreta.");
            return
       }
    
       return next();

    } catch (error) {

        console.log(error)
        res.status(500)
        return
        
    }
}