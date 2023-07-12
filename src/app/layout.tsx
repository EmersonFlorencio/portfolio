import { Indie_Flower } from 'next/font/google'
import { GlobalStyle, BodyContainer } from './global-css'

const Indie = Indie_Flower({ subsets: ['latin'], weight: ['400'] })

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
      <BodyContainer className={Indie.className}>
      <GlobalStyle />
        {children}
      </BodyContainer>
    </html>
  )
}
