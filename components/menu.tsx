import Link from 'next/link'
import { CMS_NAME, CMS_URL } from '../lib/constants'
import Container from './container'

import Image from 'next/image'

import Logo from './../img/foto-studio-equipe-logo-v1.png'

export default function Menu() {
  return (
    <nav >
      <Container>
        <div className='flex justify-between h-24 items-center'>
          <div>
            <Image src={Logo} alt="Logo" width={140}/>
          </div>
          <ul className='flex gap-x-10 text-xl'>
            <Link href="/">
              <li>Inicio</li>
            </Link>
            {/* <Link href="/">
              <li>Contato</li>
            </Link> */}
            <Link href="/contato">
              <li>Contato</li>
            </Link>
          </ul>
        </div>
      </Container>
    </nav>
  )
}
