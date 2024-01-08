import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="flex justify-between py-10">
          <div className='flex-1'>
            Logo
          </div>
          <div className='flex flex-1 gap-x-20'>
            <ul className='flex flex-col gap-y-2'>
              <Link href="/">
                Início
              </Link>
            </ul>
            <ul className='flex flex-col gap-y-2'>
              <Link href="/contato">
                Contato
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
