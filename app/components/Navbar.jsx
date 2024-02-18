import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Logo from './helpdeskdummy.jpeg'


export default function Navbar() {
  return (
    <nav>
        <Image
        src={Logo}
        alt='logo'
        width={70}
        quality={100}
        placeholder='blur'
        />
        <h1>HelpDesk</h1>
        <Link href='/'>Dashboard</Link>
        <Link href='/tickets'> Tickets</Link>
      </nav>
  )
}
