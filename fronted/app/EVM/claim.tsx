'use client'
import { useCurrentAccount } from '@mysten/dapp-kit';
import { Description, Field, Input, Label } from '@headlessui/react'
import clsx from 'clsx';
import useContract from '../hooks/useContract';
export default function Claim() {

    const { handleClaim } = useContract();
    const suiAccount = useCurrentAccount();

    async function claim() {
        try {
            await handleClaim(suiAccount?.address);
        } catch (error) {
            console.error("Failed to store addresses:", error);
        }
    }



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
                <div onClick={() => claim()} className='hover:bg-customPopover hover:text-white w-1/3 mr-5 h-full border flex items-center justify-center rounded-xl'>
                    Claim
                </div>
            </div>
        </div>
    </>
);
}