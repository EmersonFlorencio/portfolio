import { Indie_Flower } from 'next/font/google'
import StyledComponentsRegistry from './registry'
import { GlobalStyle, BodyContainer } from './global-css'
import { register } from 'swiper/element/bundle';

const Indie = Indie_Flower({ subsets: ['latin'], weight: ['400'] })

register()

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';


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
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
      </BodyContainer>
    </html>
  )
}
