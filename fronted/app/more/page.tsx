'use client';
import dynamic from 'next/dynamic';
const ParticlesBg = dynamic(() => import("particles-bg"), { ssr: false })

export default function More() {
  return (
    <main className="w-full bg-mainpage">
      <ParticlesBg type="cobweb" color="#4150B5"
       bg={true ? {
        position: "absolute",
        zIndex: 1,
        width: '100%'
      } : undefined} 
      />
        <div className="w-full h-full flex flex-col justify-center items-center min-h-screen z-0">
          <div className="w-full max-w-7xl text-center text-9xl">
              Coming Soon ...
          </div>
    
        </div>
        
    </main>
  );
}
