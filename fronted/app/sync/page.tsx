'use client';
import ConnectButton from '../EVM/page';
import useContract from '../hooks/useContract';
import { Toaster } from 'react-hot-toast';

export default function More() {
  const {syncResult,claimResult} = useContract();
  return (
    <main className="w-full bg-mainpage">
    {
      syncResult ?(
        <>
        <div className='text-black'>
          {syncResult}
        </div>
        </>
      ):
      (
        <>
        
        </>
      )
    }
      <div className="w-full flex flex-col justify-center items-center h-screen z-0">
      <Toaster />
        <div className='-mt-20 w-2/3 h-2/3 flex flex-row p-2 border-2 border-[#dcdee9] rounded-3xl'>
         <ConnectButton/>
        </div>


      </div>

    </main>
  );
}
