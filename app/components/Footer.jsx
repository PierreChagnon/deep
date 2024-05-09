import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='p-8 gap-6 flex flex-col items-center justify-center mt-16'>
      <span className='w-full bg-gradient-to-r from-transparent via-white/50 h-[1px]' />
      <div className='flex flex-wrap w-full gap-8 md:gap-12 lg:gap-20 items-center justify-around'>
        <div className='w-8 h-8 md:w-16 md:h-16 relative'>
          <Image src='/assets/funders/ANR.png' objectFit='contain' fill alt='logo funder' />
        </div>
        <div className='w-8 h-8 md:w-16 md:h-16 relative'>
          <Image src='/assets/funders/CNRS.png' objectFit='contain' fill alt='logo funder' />
        </div>
        <div className='w-8 h-8 md:w-16 md:h-16 relative'>
          <Image src='/assets/funders/ENS-DEC.png' objectFit='contain' fill alt='logo funder' />
        </div>
        <div className='w-8 h-8 md:w-16 md:h-16 relative'>
          <Image src='/assets/funders/ENS-PSL.png' objectFit='contain' fill alt='logo funder' />
        </div>
        <div className='w-8 h-8 md:w-16 md:h-16 relative'>
          <Image src='/assets/funders/nicod.png' objectFit='contain' fill alt='logo funder' />
        </div>
      </div>
      <div className='flex flex-wrap w-full gap-8 md:gap-12 lg:gap-20 items-center justify-center'>
        <Link className='hover:underline opacity-50' href="https://www.beyondgames.fr">© 2024 - Beyond Games SAS. All rights reserved.</Link>
        <Link className='hover:underline opacity-50' href="/legal">Legal</Link>
      </div>
    </div>
  )
}
