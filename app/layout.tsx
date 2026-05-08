import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { WhatsAppButton } from '@/components/whatsapp-button'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains-mono'
})

export const metadata: Metadata = {
  title: 'Grupo Ideas MX | Creatividad y Tecnología Digital',
  description: 'Hacemos que la creatividad y la tecnología trabajen para ti en el mundo digital. Páginas web, marketing digital, diseño gráfico y más.',
  keywords: 'páginas web, marketing digital, diseño gráfico, desarrollo de apps, México',
  icons: {
    icon: '/logo-grupoideas.png',
    apple: '/logo-grupoideas.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <WhatsAppButton phoneNumber="5575086614" />
      </body>
    </html>
  )
}
