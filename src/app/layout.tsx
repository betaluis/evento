import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Container from '@/components/Container'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Evento - Find events around you.',
    description: 'Browse mone than 10,000 events worldwide',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-gray-950 text-white`}>
                <Container>
                    <Header />
                    <div className="flex-1">
                        {children}
                    </div>
                    <Footer />
                </Container>
            </body>
        </html>
    )
}
