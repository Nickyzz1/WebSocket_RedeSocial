
"use client"
import Image from "next/image";
import Link from "next/link";
import logo from '../../../public/assets/logo.png'
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { alpha, Button, ButtonProps, InputBase, OutlinedInputProps, Stack, styled } from "@mui/material";
import { purple } from '@mui/material/colors'

export default function register() {
    return (
      <>
      <div>
        <main className="w-full h-screen flex flex-col items-center justify-center">
          <Image src={logo} alt="logo" className="w-1/4 mb-6 min-w-55" ></Image>
          <div className="bg-[#9356EA] rounded-4xl w-2/4 h-1/2 min-w-72 py-60 flex justify-center flex-col items-center max-w-xl">
            <div className="w-3/5">
              <p className="text-white my-2">Nome</p>
              <input className="bg-white rounded-2xl p-2 w-full focus:duration-300 focus:ease-in focus:shadow-pink-500 border-pink-400 outline outline-pink-400 shadow-md shadow-pink-400/95" ></input>
              {/* <input className="bg-white rounded-2xl p-2 w-full outline-0 focus:duration-300 focus:ease-in focus:border-pink-500 focus:outline focus:outline-pink-500 focus:shadow-md focus:shadow-pink-500/95" ></input> */}
            </div>
            <div className="w-3/5">
              <p className="text-white my-2">Email</p>
              <input className="bg-white rounded-2xl p-2 w-full focus:duration-300 focus:ease-in focus:shadow-pink-500 border-pink-400 outline outline-pink-400 shadow-md shadow-pink-400/95" ></input>
            </div>
            <div className="w-3/5">
              <p className="text-white my-2">Senha</p>
              <input type="password" className="bg-white rounded-2xl p-2 w-full focus:duration-300 focus:ease-in focus:shadow-pink-500 border-pink-400 outline outline-pink-400 shadow-md shadow-pink-400/95" ></input>
            </div>
              <Button 
                variant="contained" 
                style={{ backgroundColor: '#9333ea', color: '#fff', borderRadius: '22px', width : '50%', marginTop : '15px', marginBottom: '15px', padding: '10px' }}
                >
                Cadastrar
              </Button>
            <Link href={"register"} className="text-white">Já tem conta? Logue-se</Link>
          </div>
        </main>
      </div>
    </>
  );
}
  