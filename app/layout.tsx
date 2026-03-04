import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Editor de Video | Edicao Criativa com Custo-Beneficio',
  description:
    'Serviço de edição de vídeo com dedicação, qualidade e preço acessível. Transformo suas ideias em conteudo visual impactante.',
  keywords: ['edição de vídeo', 'editor de vídeo', 'vídeo editing', 'conteúdo digital', 'edição criativa'],
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
