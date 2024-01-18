import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import Link from 'next/link'

import Image from 'next/image'
import Logo from './../img/foto-studio-equipe-logo-preto.png'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="flex justify-between py-10 gap-x-10">
          <div className='flex-1 max-w-[450px]'>
            <div>
              <Image src={Logo} alt="logo-foto-equipe" width={400} />
            </div>
            <p className='mt-10'>Somos um agencia de fotografia onde oferecemos os mais diversos serviços de fotografia, desde prepáro do ambiente, até a edição e criação do book para fotos. Trabalhamos com BLOG de dicas sobre fotografia, venda afiliada e prestação de serviço, oferecemos opção para fotografos se inscrevem e receberam serviços de nossos clientes.</p>
          </div>
          <div className='flex flex-1 gap-x-20'>
            <ul className='flex flex-col gap-y-2'>
              <Link href="/">
                Início
              </Link>
              <Link href="/contato">
                Contato
              </Link>
            </ul>
            <ul className='flex flex-col gap-y-2'>
              <Link href="/transparencia">
                Transparencia
              </Link>
              <Link href="/termos-de-uso">
                Termos de uso
              </Link>
              <Link href="/politica-de-privacidade">
                Política de privacidade
              </Link>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}
