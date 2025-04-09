
"use client"
import Image from "next/image";
import Link from "next/link";
import logo from '../../../public/assets/logo.png'
import TextField from '@mui/material/TextField';

export default function register() {
    return (
      <>
      <div>
        <main className="w-full h-screen flex flex-col items-center justify-center">
          <Image src={logo} alt="logo" className="w-1/4 mb-6 min-w-55" ></Image>
          <div className="bg-[#9356EA] rounded-4xl w-2/4 h-1/2 min-w-72 py-60 flex justify-center flex-col items-center max-w-xl">
            <div className="w-3/5">
              <p className="text-white my-2">Nome</p>
              <TextField
                id="filled-multiline-flexible"
                multiline
                maxRows={4}
                variant="filled"
                className="bg-white p-2 w-full"
                sx={{
                  borderRadius: '12px',
                }}
              />
            </div>
            <div className="w-3/5">
              <p className="text-white my-2">Email</p>
              <input className="bg-white rounded-2xl p-2 w-full"></input>
            </div>
            <div className="w-3/5">
              <p className="text-white my-2">Senha</p>
              <input type="password" className="bg-white rounded-2xl p-2 w-full"></input>
            </div>
            <button className="bg-[#701AE8] hover:bg-[#291d36dc] bg- text-white text-xl rounded-2xl w-40 p-2 my-4 cursor-pointer">Entrar</button>
            <Link href={"register"} className="text-white">Já tem conta? Logue-se</Link>
          </div>
        </main>
      </div>
      </>
    );
  }
  