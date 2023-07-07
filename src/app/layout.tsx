import { Inter } from 'next/font/google'
import { GlobalStyle, BodyContainer } from './global-css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Emerson Florencio - Portfólio',
  description: 'Pagina Criada Por Emerson Florencio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <BodyContainer className={inter.className}>
      <GlobalStyle />
        {children}
      </BodyContainer>
    </html>
  )
}
