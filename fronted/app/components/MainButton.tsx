"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ConnectButton, useAccounts } from "@mysten/dapp-kit";
import { useEffect } from "react";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

export default function MainButton() {

    return (
        <div className="flex w-full h-48 flex-row z-50 relative">
            <div className="ml-20 mr-10 w-1/3 flex flex-col rounded-3xl border-2 border-gray-300 hover:border-black hover:-translate-y-2 p-2">
                <p className="mt-4 ml-4 text-4xl text-black">
                <Link href="/sync">
                        Sync
                    </Link>
                </p>
                <p className="mt-4 ml-4 text-2xl text-gray-600">Sync to connect your sui account to other chains.</p>
            </div>

            <div className="ml-10 mr-10 w-1/3 flex flex-col rounded-3xl border-2 border-gray-300 hover:border-black hover:-translate-y-2 p-2">
                <p className="mt-4 ml-4 text-4xl text-black">Start</p>
                <p className="mt-4 ml-4 text-2xl text-gray-600">Sync is to *****</p>
            </div>


            <div className="ml-10 mr-10 w-1/3 flex flex-col rounded-3xl border-2 border-gray-300 hover:border-black hover:-translate-y-2 p-2">
                <p className="mt-4 ml-4 text-4xl text-black">Sync</p>
                <p className="mt-4 ml-4 text-2xl text-gray-600">Sync is to *****</p>
            </div>

        </div>
    );
}
