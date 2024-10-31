"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";
import { useEffect } from "react";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
export function TopNav() {
    const pathname = usePathname();
    const [currentPath, setCurrentPath] = useState(pathname);
    const suiAccount = useCurrentAccount();

    useEffect(() => {
        setCurrentPath(pathname); // 强制组件重新渲染
    }, [pathname]);

    useEffect(() => {
        localStorage.setItem('suiAccount', String(suiAccount?.address) || '');
    }, [suiAccount]);

    return (
        <div className="flex w-full h-24 bg-nav flex-row  border-b-2 border-b-red z-50">
            <div className=" ml-5 w-1/3 flex flex-row text-white items-center">
                {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo.gif"
          alt="Logo"
          width={70}
          height={40}
          priority
        /> */}
                <p className="mt-1 text-4xl">DeepSync</p>
            </div>
            <div className="w-1/3 flex flex-between items-center bg-nav text-2xl">
                <div className="w-1/4  text-white/50">
                    <Link
                        className={`link ${pathname === "/" ? "text-white" : ""
                            } block w-full h-full leading-[52px]`}
                        href="/"
                    >
                        Home
                    </Link>
                </div>
                <div className="w-1/4  text-white/50">
                    <Link
                        className={`link ${pathname.startsWith("/sync") ? "text-white" : ""
                            } block w-full h-full leading-[52px]`}
                        href="/sync"
                    >
                        Sync
                    </Link>
                </div>
                <div className="w-1/4">
                    <Link
                        className={`link ${pathname.startsWith("/docs") ? "text-white" : ""
                            } block w-full h-full leading-[52px]`}
                        href="/docs"
                    >
                        <Popover className="relative">
                            <PopoverButton className="block text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
                                Docs
                            </PopoverButton>
                            <PopoverPanel
                                transition
                                anchor="bottom"
                                className="absolute z-50 mt-2 w-72 bg-customPopover border-white rounded-lg shadow-lg z-50 divide-y divide-white/5 rounded-xl text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
                                style={{ top: "100%" }}
                            >
                                <div className="p-3">
                                    <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                                        <p className="font-semibold text-white">Insights</p>
                                        <p className="text-white/50">Measure actions your users take</p>
                                    </a>
                                    <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                                        <p className="font-semibold text-white">Automations</p>
                                        <p className="text-white/50">Create your own targeted content</p>
                                    </a>
                                    <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                                        <p className="font-semibold text-white">Reports</p>
                                        <p className="text-white/50">Keep track of your growth</p>
                                    </a>
                                </div>
                                <div className="p-3">
                                    <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                                        <p className="font-semibold text-white">Documentation</p>
                                        <p className="text-white/50">Start integrating products and tools</p>
                                    </a>
                                </div>
                            </PopoverPanel>

                        </Popover>
                    </Link>
                </div>

                <div className="w-1/4">
                    <Popover className="relative">
                        <PopoverButton className="block text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
                            Contact
                        </PopoverButton>
                        <PopoverPanel
                            transition
                            anchor="bottom"
                            className="absolute z-50 mt-2 w-32 bg-customPopover rounded-lg shadow-lg divide-y divide-white/5 rounded-xl text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
                            style={{ top: "100%" }}
                        >
                            <div className="p-3">
                                <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                                    <p className="font-semibold text-white">Twitter</p>
                                </a>
                                <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                                    <p className="font-semibold text-white">Discord</p>
                                </a>
                                <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                                    <p className="font-semibold text-white">Telegrame</p>
                                </a>
                                <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                                    <p className="font-semibold text-white">Community</p>
                                </a>
                            </div>
                        </PopoverPanel>
                    </Popover>
                </div>
                <div className="w-1/4 text-white/50">
                <Link
                        className={`link ${pathname.startsWith("/more") ? "text-white" : ""
                            } block w-full h-full leading-[52px]`}
                        href="/more"
                    >
                        More
                    </Link>
                </div>

            </div>

            <div className="w-1/3 flex flex-row items-center justify-end bg-nav text-xl mr-5">
                <ConnectButton />
            </div>
        </div>
    );
}
