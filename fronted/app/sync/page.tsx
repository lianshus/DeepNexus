'use client';
import ConnectButton from '../EVM/page';
import dynamic from 'next/dynamic';
import Image from 'next/image';
const ParticlesBg = dynamic(() => import("particles-bg"), { ssr: false })

export default function More() {
  return (
    <main className="w-full bg-mainpage">
      {/* <ParticlesBg type="cobweb" color="#4150B5"
        // config={config} 
        bg={{
          position: "absolute",
          zIndex: 1,
          width: '100%'
        }}
      />  */}
      <div className="w-full flex flex-col justify-center items-center h-screen z-0">
        <div className='-mt-20 w-2/3 h-2/3 flex flex-row p-2 border-2 border-[#dcdee9] rounded-3xl'>
         <ConnectButton/>
        </div>


      </div>

    </main>
  );
}
