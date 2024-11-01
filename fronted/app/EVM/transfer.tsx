'use client'
import Image from 'next/image';
import { Description, Field, Input, Label } from '@headlessui/react'
import clsx from 'clsx';
export default function Transfer() {

  return (
    <>
      <>
        <div className=' border-2 rounded-xl p-4 mr-3 flex flex-col items-center justify-center h-full'>
          <div>
            <p className='text-4xl'>Transfer use Wormhole</p>
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
}