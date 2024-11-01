"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ConnectButton, useAccounts } from "@mysten/dapp-kit";
import { useEffect } from "react";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

export default function MainButton() {

    return (
        <div className="flex w-full h-64 flex-row z-50 relative">
            <div className="ml-20 mr-10 w-1/3 flex flex-col rounded-3xl border-2 border-gray-300 hover:border-black hover:-translate-y-2 p-2">
                <p className="mt-4 ml-4 text-4xl text-black">
                    <Link href="/sync">
                        Deep Sync
                    </Link>
                </p>
                <p className="mt-4 ml-4 text-2xl text-gray-600">Your gateway to cross-chain marketing.
                    Our enterprise SDK enables Sui projects to connect with Web3 users across all major blockchain networks beyond the Sui ecosystem.
                    </p>
            </div>

            <div className="ml-10 mr-10 w-1/3 flex flex-col rounded-3xl border-2 border-gray-300 hover:border-black hover:-translate-y-2 p-2">
                <p className="mt-4 ml-4 text-4xl text-black">Deep Insight</p>
                <p className="mt-4 ml-4 text-2xl text-gray-600">Your Premier Analytics Solution
                    Access the most comprehensive analytics database of blockchain data, powered by Walrus. Target your ideal users with precision and maximize the ROI of your airdrops and marketing campaigns.</p>
            </div>


            <div className="ml-10 mr-10 w-1/3 flex flex-col rounded-3xl border-2 border-gray-300 hover:border-black hover:-translate-y-2 p-2">
                <p className="mt-4 ml-4 text-4xl text-black">More</p>
                <p className="mt-4 ml-4 text-2xl text-gray-600">More features coming soon.</p>
            </div>

        </div>
    );
}
