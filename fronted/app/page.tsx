'use client';
import Image from "next/image";
import ConnectButton from "./EVM/page";
import Title from "./components/Title";
import dynamic from 'next/dynamic';
import MainButton from "./components/MainButton";
const ParticlesBg = dynamic(() => import("particles-bg"), { ssr: false })

export default function Home() {
  return (
    <main className="w-full bg-mainpage">
      <ParticlesBg type="cobweb" color="#4150B5"
      bg={{
        position: "absolute",
        zIndex: 1,
        width: '100%'
      }} 
      />
        <div className="w-full h-full flex flex-col justify-center min-h-screen z-0">
          <div className="mt-16 ml-40 w-full max-w-7xl text-left">
            <div className="w-3/4">
              <Title />
            </div>
          </div>
          <div className="w-full mt-10">
            <MainButton/>
          </div>
          
        </div>
        
    </main>
  );
}
