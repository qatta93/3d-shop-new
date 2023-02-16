import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { MobileNav } from './MobileNav';
import { DesktopNav } from './DesktopNav';
import useDeviceSize from '../hooks/useDeviceSize';
import { MobileNavProps } from '../types';

export const Navbar = ({openMenu, setOpenMenu}:MobileNavProps) => {
  const [deviceWidth] = useDeviceSize();
  const { data: session } = useSession();

  return (
    <nav className='fixed z-10 h-[50px] sm:h-[70px] w-full flex justify-between bg-primary-light px-[20px] py-[12px] sm:py-[20px] sm:px-[40px] lg:px-[112px]'>
      <section className='flex'>
        <div className='relative h-[30px] w-[30px] lg:h-[37px] lg:w-[37px]'>
          <Image src="/images/logo.png" alt="logo"  layout='fill' className="absolute"/>
        </div>
        <p className='font-michroma pl-2.5 leading-7 text-[20px] lg:text-[26px]'>SHOPILY</p>
      </section>
      <section>
        {deviceWidth > 600 ? <DesktopNav session={session} signIn={signIn} signOut={signOut}/> : <MobileNav openMenu={openMenu} setOpenMenu={setOpenMenu}/>}
      </section>
    </nav>
  )
}

export default Navbar;