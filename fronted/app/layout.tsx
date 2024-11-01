'use client';
import localFont from 'next/font/local'
import "./globals.css";
import '@mysten/dapp-kit/dist/index.css';

import { createNetworkConfig, SuiClientProvider, WalletProvider } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui/client';
import ContextProvider from '@/context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {TopNav} from "@/app/components/TopNav"
import {
	DEVNET_COUNTER_PACKAGE_ID,
	TESTNET_COUNTER_PACKAGE_ID,
	MAINNET_COUNTER_PACKAGE_ID,
} from "@/app/constant";
// Config options for the networks you want to connect to
const { networkConfig } = createNetworkConfig({
  localnet: { url: getFullnodeUrl('localnet') },
  testnet:{url: getFullnodeUrl("testnet"),
    variables: {
      counterPackageId: TESTNET_COUNTER_PACKAGE_ID,
    },},
  mainnet: { url: getFullnodeUrl('mainnet') },
});
const queryClient = new QueryClient();

const myFont = localFont({
  src: '../public/fonts/myfont.ttf',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  // const cookies = headers().get('cookie')
  return (
     
    <html lang="en">
    <body >
    
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork="testnet">
      <ContextProvider cookies="null">
        <WalletProvider>
            <div className={myFont.className} >
            <TopNav />
              <main style={{ position: 'relative', zIndex: 1 }}>
                {children}
              </main>
              </div>
        </WalletProvider>
        </ContextProvider>
      </SuiClientProvider>
    </QueryClientProvider>
      </body>
    
    </html>
    
  );
}
