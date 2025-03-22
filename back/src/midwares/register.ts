import express, { Request, Response, Router } from 'express';
import { iUser } from '../dto/user.ts';
import User from '../models/userModel.ts';

export const registerMid = async (req: Request, res : Response) => {
    const data : iUser = req.body
    if(data == null || data == undefined) {
        res.status(400).send("Informações faltantes")
        return
    }

    if(!data.name || !data.email || !data.password) {
        res.status(400).send("Informações faltantes")
        return
    }

    const user = await User.findOne({email: data.email});

    if(user) { 
        res.status(400).send("Usuário já cadastrad0")
        return
    }
}