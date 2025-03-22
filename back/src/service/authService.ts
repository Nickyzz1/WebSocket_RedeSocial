import express, { Request, Response, Router } from 'express';
import User from '../models/userModel.ts';
import CryptoJS from 'crypto-js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { iUser } from '../dto/user.ts';

dotenv.config();

export const registerService = async (user : iUser) => {

    try {
        const passHash = CryptoJS.AES.encrypt(user.password, process.env.SECRET as string).toString();

        const newUser = new User({
            name : user.image,
            email: user.email,
            password: passHash,
            image : user.image,
        });

        await newUser.save();
    } catch (error) {
        console.log(error)
    }
};

export const loginService = async (data: iUser) => {
   
    const user = await User.findOne({ email : data.email });

    const secret = process.env.SECRET;
    
    if(secret) {
        const token = jwt.sign(
            {
                id: user?.id,
            },
            secret,
            {
                expiresIn: '2 days',
            }
        )     
        return token
    }
}

