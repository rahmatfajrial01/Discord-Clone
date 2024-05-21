"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getCookie, setCookie, removeCookie } from 'typescript-cookie'

export default function Home() {
  const router = useRouter()
  return (
    <main className="">
      <button className="bg-red-500 p-3 rounded-xl text-white" onClick={() => { removeCookie('user'), router.push('/login') }}>logout</button>
    </main>
  );
}
