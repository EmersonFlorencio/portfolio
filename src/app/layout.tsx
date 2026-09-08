import StyledComponentsRegistry from './registry'
import { GlobalStyle, BodyContainer } from './global-css'

import 'swiper/css';


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
      <BodyContainer>
        <GlobalStyle />
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
      </BodyContainer>
    </html>
  )
}
