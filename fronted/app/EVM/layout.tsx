import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import { headers } from 'next/headers' // added
import ContextProvider from '@/context'
export default function EVMLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    const cookies = headers().get('cookie')

    return (
        <html lang="en">
            <body className={inter.className}>
                <ContextProvider cookies={cookies}>
                    <div className='z-50'>
                        {children}
                    </div>
                </ContextProvider>
            </body>
        </html>
    )
}