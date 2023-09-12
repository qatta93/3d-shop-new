import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link'
import { MobileNav } from './MobileNav';
import { DesktopNav } from './DesktopNav';
import useDeviceSize from '../hooks/useDeviceSize';
import { MobileNavProps } from '../types';
import { BackButton } from './backButton';

export const Navbar = ({openMenu, setOpenMenu}:MobileNavProps) => {
  const [deviceWidth] = useDeviceSize();
  const { data: session } = useSession();

  return (
    <>
    <nav className='fixed z-10 h-[50px] sm:h-[70px] w-full flex justify-between bg-primary-light px-[20px] py-[12px] sm:py-[20px] sm:px-[40px] lg:px-[112px]'>
      <section className='flex'>
        <div className='relative h-[30px] w-[30px] lg:h-[37px] lg:w-[37px]'>
          <Link href='/'>
            <Image src="/images/logo.png" alt="logo"  layout='fill' className="absolute cursor-pointer"/>
          </Link>
        </div>
        <Link href='/'>
          <p className='font-michroma pl-2.5 leading-7 text-[20px] lg:text-[26px] cursor-pointer'>SHOPILY</p>
          </Link>
      </section>
      <section>
        {deviceWidth > 600 ? <DesktopNav session={session} signIn={signIn} signOut={signOut}/> : <MobileNav openMenu={openMenu} setOpenMenu={setOpenMenu}/>}
      </section>
    </nav>
    {(window.location.pathname == '/') ?
    ''
    :
    <section className='absolute top-20 px-[20px] py-[4px] sm:py-[6px] sm:px-[40px] lg:px-[112px]'>
      <BackButton />
    </section>
    }
    </>
  )
}

export default Navbar;