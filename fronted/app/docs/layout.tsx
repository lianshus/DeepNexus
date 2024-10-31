import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function EVMLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {

    return (
        <html lang="en">
            <body className={inter.className}>
                    <div className='z-999 bg-white'>
                        {children}
                    </div>
            </body>
        </html>
    )
}