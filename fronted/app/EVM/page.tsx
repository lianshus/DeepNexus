'use client'
import Image from 'next/image';
import { useAppKit } from '@reown/appkit/react';
import { useAccount, useDisconnect } from 'wagmi';
import { useEffect, useState } from 'react';
import { useCurrentAccount } from '@mysten/dapp-kit';
import { Description, Field, Input, Label } from '@headlessui/react'
import clsx from 'clsx';
import storeAddressesOnWalrus from '../utils/storage';

export default function ConnectButton() {
  const { open, close } = useAppKit()
  const { address, } = useAccount()
  const { disconnect } = useDisconnect();
  const suiAccount = useCurrentAccount();

  const [selectedOption, setSelectedOption] = useState<string | null>('bind');

  const [blobId, setBlobId] = useState('');
  const [objectId, setObjectId] = useState('');
  async function bind() {
    if (address && suiAccount) {
      try {
        const blob = await storeAddressesOnWalrus(address, suiAccount.address);
        console.log("Addresses have been stored successfully.");
        setBlobId(blob.blobId);
        setObjectId(blob.id);
        setSelectedOption('blob')
        alert(`blob.id:${blob.blobId}`)
      } catch (error) {
        console.error("Failed to store addresses:", error);
      }
    }
  }

  const renderLeftContent = () => {
    console.log('Selected Option:', selectedOption); // 调试输出
    switch (selectedOption) {
      case 'bind':
        return (
          <>
            {
              (address && suiAccount?.address) ? (
                <div className='h-full flex flex-col items-center justify-center text-black  bg-white border-2 rounded-xl p-4 z-50 mr-3'>
                  <div className='text-lg'> You had connected the account:</div>
                  <div className='mt-5 mb-5 text-4xl text-center'>
                    {`${(address as string).slice(0, 6)}......${(address as string).slice(-6)}`}
                  </div>
                  and
                  <div className='mt-5 mb-5 text-4xl text-center'>
                    {`${suiAccount?.address.slice(0, 6) ?? 'Invalid'}......${suiAccount?.address.slice(-6) ?? 'Account'}` ||
                      'Invalid Account'}
                  </div>


                  <div className='text-lg mt-5 h-16 flex items-center justify-center text-center'>
                    First,you need to bind the accounts and store them in the walrus.
                  </div>
                  <div className='text-lg w-full mt-5 h-16 flex flex-row'>
                    <div onClick={() => bind()} className='hover:bg-customPopover hover:text-white w-1/2 mr-5 h-full border flex items-center justify-center bg-[#F2F4F4] rounded-xl'>
                      Bind Accounts
                    </div>
            
                    <div className='hover:bg-customPopover hover:text-white w-1/2 h-full border flex items-center justify-center bg-[#F2F4F4] rounded-xl'
                      onClick={() => disconnect()}>
                      Disconnect
                    </div>
                  </div>

                </div>
              ) : (
                <>
                  <div className='flex items-center justify-center h-full text-3xl'>
                    Please at least connect two accounts
                  </div>

                </>
              )}

          </>
        )
          ;

      case 'blob':
        return (
          <>
            {
              (address && suiAccount?.address) ? (
                <div className='h-full flex flex-col items-center justify-center text-black  bg-white border-2 rounded-xl p-4 z-50 mr-3'>
                  <div className='text-3xl'>Bind Successfully</div>
                  <div className='mt-5 mb-5 text-center'>
                    <p className='text-lg'>Walrus Blob Id:</p> 
                    <p className='text-sm text-red-400'>{blobId}</p>
                  </div>
                  and
                  <div className='mt-5 mb-5 text-center'>
                  <p className='text-lg'>Sui Object Id:</p> 
                  <p className='text-sm text-red-400'>{objectId}</p>
                  </div>
                  <div className='text-lg mt-5 h-16 flex items-center justify-center text-center'>
                    Now you can sync to sui!
                  </div>
                  <div className='text-lg w-full mt-5 h-16 flex flex-row'>
                   
                    <div onClick={() => bind()} className='hover:bg-customPopover hover:text-white w-1/2 mr-5 h-full border flex items-center justify-center bg-[#F2F4F4] rounded-xl'>
                      Sync to sui
                    </div>
                    <div className='hover:bg-customPopover hover:text-white w-1/2 h-full border flex items-center justify-center bg-[#F2F4F4] rounded-xl'
                      onClick={() => disconnect()}>
                      Disconnect
                    </div>
                  </div>

                </div>
              ) : (
                <>
                  <div className='flex items-center justify-center h-full text-3xl'>
                    Please at least connect two accounts
                  </div>

                </>
              )}

          </>
        )
          ;

      case 'claim':
        return (
          <>
            <div className=' border-2 rounded-xl p-4 mr-3 flex flex-col items-center justify-center h-full'>
              <Field className="w-full">
                <Label className="text-4xl font-medium">Address</Label>
                <Description className="text-lg mt-2">Enter your address and claim the MeMe coin.</Description>
                <Input
                  className={clsx(
                    'bg-white mt-3 block w-5/6 rounded-lg border-2 py-1.5 px-3 text-lg',
                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                  )}
                />
              </Field>
              <div className='text-lg w-full mt-5 h-10 flex flex-row'>
                <div className='hover:bg-customPopover hover:text-white w-1/3 mr-5 h-full border flex items-center justify-center rounded-xl'>
                  Claim
                </div>
              </div>
            </div>
          </>
        );
      case 'transfer':
        return (
          <>
            <>
              <div className=' border-2 rounded-xl p-4 mr-3 flex flex-col items-center justify-center h-full'>
                <div>
                  <p className='text-4xl'>Transfer use </p>
                </div>
                <Field className="w-full flex flex-col items-center">
                  <Input
                    className={clsx(
                      'bg-white mt-3 block w-full rounded-lg border-2 py-1.5 px-3 text-lg',
                      'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                    )}
                    placeholder='amount'
                  />
                </Field>
                <div className='mt-2'>
                  <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/arrow.svg"
                    alt="arrow"
                    width={40}
                    height={40}
                    priority
                  />
                </div>
                <Field className="w-full flex flex-col items-center ">
                  <Input
                    className={clsx(
                      'bg-white mt-3 block w-full rounded-lg border-2 py-1.5 px-3 text-lg',
                      'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                    )}
                    placeholder='amount'
                  />
                </Field>
                <div className='text-lg w-full mt-16 h-10 flex flex-row items-center'>
                  <div className='hover:bg-customPopover hover:text-white w-full mr-5 h-full border flex items-center justify-center rounded-xl'>
                    Transfer
                  </div>
                </div>
              </div>
            </>
          </>
        );
      case 'more':
        return (
          <>
            <div className='flex items-center justify-center h-full text-3xl'>
              Waitting
            </div>
          </>
        );;
      default:
        return (
          <>
            {
              (address && suiAccount?.address) ? (
                <div className='h-full flex flex-col items-center justify-center text-black  bg-white border-2 rounded-xl p-4 z-50 mr-3'>
                  <div className='text-lg'> You had connected the account:</div>
                  <div className='mt-5 mb-5 text-4xl text-center'>
                    {`${(address as string).slice(0, 6)}......${(address as string).slice(-6)}`}
                  </div>
                  and
                  <div className='mt-5 mb-5 text-4xl text-center'>
                    {`${suiAccount?.address.slice(0, 6) ?? 'Invalid'}......${suiAccount?.address.slice(-6) ?? 'Account'}` ||
                      'Invalid Account'}
                  </div>


                  <div className='text-lg mt-5 h-16 flex items-center justify-center text-center'>
                    just something i write randomly just something
                    i write randomlyjust something i write randomly
                    maybe i can write some introduction to the sync here
                  </div>
                  <div className='text-lg w-full mt-5 h-16 flex flex-row'>
                    <div className='w-1/2 mr-5 h-full border flex items-center justify-center bg-[#F2F4F4] rounded-xl'>
                      Sync to sui
                    </div>
                    <div className='w-1/2 h-full border flex items-center justify-center bg-[#F2F4F4] rounded-xl'
                      onClick={() => disconnect()}>
                      Discoonect
                    </div>
                  </div>

                </div>
              ) : (
                <>
                  <div className='flex items-center justify-center h-full text-3xl'>
                    Please at least connect two accounts
                  </div>

                </>
              )}

          </>
        )
          ;
    }
  };

  return (
    <>
      <div className='w-1/2 rounded-3xl'>
        {renderLeftContent()}
      </div>

      <div className="w-1/2 p-5 rounded-3xl 
            border-2
            text-9xl z-50 flex flex-col">
        <div className='mt-2 ml-2 flex flex-row text-black text-2xl'>
          Conncet your the evm account
        </div>

        <div className='mt-10'>
          {address ? (
            <>
              <div onClick={() => open()} className='flex items-center justify-center 
text-white text-xl group rounded-lg border border-transparent rounded-xl
w-full h-18
px-5 py-4 transition-colors 
bg-[#4150B5]
hover:border-gray-300
hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30
hover: -translate-y-2
mr-10 
'>
                <div>
                  {address}
                </div>
              </div>
            </>


          ) : (
            <>
              <div onClick={() => open()} className='flex items-center justify-center 
    text-white text-xl group rounded-lg border border-transparent rounded-xl
    w-56 h-18
    px-5 py-4 transition-colors 
    bg-[#4150B5]
    hover:border-gray-300
    hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30
    hover: -translate-y-2
    mr-10 
    '>
                <div className=''>
                  <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/EVM.png"
                    alt="ethereum logo"
                    width={40}
                    height={40}
                    priority
                  />
                </div>
                <div>
                  Connect EVM
                </div>
              </div>
            </>
          )}

        </div>
        <div className='mt-20 border-t-2 border-[#dadae3]'>
          <div className='mt-2 ml-2 flex flex-row text-black text-2xl'>
            Others
          </div>
          <div className='mt-2 ml-2 flex flex-row'>
            <div onClick={() => setSelectedOption('bind')} className='w-1/2 mr-2 flex flex-row rounded-xl hover:border-2 hover:-translate-y-2 hover:border-[#dadae3]'>
              <div className='mr-2'>
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/bind.svg"
                  alt="bind"
                  width={60}
                  height={60}
                  priority
                />
              </div>
              <div className='flex flex-col'>
                <p className='text-2xl text-black'>Bind accounts</p>
                <p className='text-sm text-gray-500'>Bind the accounts you connected</p>
              </div>
            </div>
            <div onClick={() => setSelectedOption('claim')} className='w-1/2 mr-2 flex flex-row rounded-xl hover:border-2 hover:-translate-y-2 hover:border-[#dadae3]'>
              <div className='mr-2'>
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/claim.svg"
                  alt="claim"
                  width={60}
                  height={60}
                  priority
                />
              </div>
              <div className='flex flex-col'>
                <p className='text-2xl text-black'>Claim</p>
                <p className='text-sm text-gray-500'>Enter your address to claim Meme</p>
              </div>
            </div>
          </div>
          <div className='mt-6 ml-2 flex flex-row'>
            <div onClick={() => setSelectedOption('transfer')} className='w-1/2 mr-2 flex flex-row rounded-xl hover:border-2 hover:-translate-y-2 hover:border-[#dadae3]'>
              <div className='mr-2'>
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/exchange.svg"
                  alt="exchange"
                  width={60}
                  height={60}
                  priority
                />
              </div>
              <div className='flex flex-col'>
                <p className='text-2xl text-black'>Transfer</p>
                <p className='text-sm text-gray-500'>you can transfer your token use </p>
              </div>
            </div>
            <div onClick={() => setSelectedOption('more')} className='w-1/2 mr-2 flex flex-row rounded-xl hover:border-2 hover:-translate-y-2 hover:border-[#dadae3]'>
              <div className='mr-2'>
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/more.svg"
                  alt="more"
                  width={60}
                  height={60}
                  priority
                />
              </div>
              <div className='flex flex-col'>
                <p className='text-2xl text-black'>And more ...</p>
                <p className='text-sm text-gray-500'>you can transfer your ... to ...</p>
              </div>
            </div>
          </div>
        </div>


      </div>

    </>
  )
}