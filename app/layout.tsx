import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Editor de Video | Edicao Criativa com Custo-Beneficio',
  description:
    'Servico de edicao de video com dedicacao, qualidade e preco acessivel. Transformo suas ideias em conteudo visual impactante.',
  keywords: ['edicao de video', 'editor de video', 'video editing', 'conteudo digital', 'edicao criativa'],
}

export const viewport: Viewport = {
  themeColor: '#1a1a2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
