import Link from 'next/link'
import { CMS_NAME, CMS_URL } from '../lib/constants'
import Container from './container'

export default function Menu() {
  return (
    <nav >
      <Container>
        <div className='flex justify-between h-14 items-center'>
          <div>
            Logo
          </div>
          <ul className='flex gap-x-10'>
            <Link href="/">
              <li>Inicio</li>
            </Link>
            <Link href="/contato">
              <li>Contato</li>
            </Link>
            <Link href="/contato">
              <li>Contato</li>
            </Link>
          </ul>
        </div>
      </Container>
    </nav>
  )
}
