"use client"
import Image from "next/image";
import { Button, Input } from "@mui/material";
import Link from "next/link";
import { routes } from "@/constants/routes";


export default function register() {
  return (
    <>
      <div>
        <main className="w-full h-screen flex flex-col items-center justify-center">
          <div className="bg-[#9356EA] rounded-4xl w-1/3 h-1/2 min-w-72 flex justify-center flex-col items-center">
            <div className="w-1/2">
              <p className="text-white">Email ou Username</p>
              <input className="bg-white rounded-2xl p-2 w-full"></input>
            </div>
            <div className="w-1/2">
              <p className="text-white">Senha</p>
              <input className="bg-white rounded-2xl p-2 w-full"></input>
            </div>
            <button className="bg-[#701AE8] text-white text-xl rounded-2xl w-40 p-2">Entrar</button>
            <Link href={"register"} className="text-white">Não tem conta? Registre-se</Link>
          </div>
        </main>
      </div>
    </>
  );
}
