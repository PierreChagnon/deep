import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='p-8 gap-6 flex flex-col items-center justify-center mt-16'>
      <span className='w-full bg-gradient-to-r from-transparent via-white/50 h-[1px]'/>
      <div className='flex flex-wrap w-full gap-8 md:gap-12 lg:gap-20 items-center justify-around'>
        <Image src='/assets/funders/ANR.png' width={96} height={48} alt='logo funder' />
        <Image src='/assets/funders/CNRS.png' width={96} height={48} alt='logo funder' />
        <Image src='/assets/funders/ENS-DEC.png' width={96} height={48} alt='logo funder' />
        <Image src='/assets/funders/ENS-PSL.png' width={96} height={48} alt='logo funder' />
        <Image src='/assets/funders/nicod.png' width={96} height={48} alt='logo funder' />
      </div>
      <p>© 2024 - Beyond Games</p>
    </div>
  )
}
