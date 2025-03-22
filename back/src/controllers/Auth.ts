import express, { Request, Response, Router } from 'express';
import User from '../models/userModel.ts';
import CryptoJS from 'crypto-js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { iUser } from '../dto/user.ts';
import { registerService } from '../service/authService.ts';
import { loginService } from '../service/authService.ts';


dotenv.config();

export const register = async (req: Request, res: Response) => {
    const user : iUser = req.body;

    try {
        await registerService(user)
        res.status(201).send('User criado com sucesso!')
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar usuário: ', error });
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const token = await loginService(req.body)
        res.status(201)
        res.set("Authorization", `Bearer ${token}`).status(200).json({ message: "Login bem-sucedido!" });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao logar usuário: ', error });
    }
}

