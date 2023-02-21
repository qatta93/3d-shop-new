import React, { useState } from 'react';
import { Navbar } from './navigation/Navbar';
import { Footer } from './Footer';
import { MobileMenu } from './navigation/MobileMenu';

export const Layout = ({ children }:React.PropsWithChildren<{}>) => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className='relative w-full h-full min-h-screen'>
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      {/* <main className='h-[calc(100vh-50px)] sm:h-[calc(100vh-70px)] bg-primary-light'>{openMenu ? <MobileMenu setOpenMenu={setOpenMenu}/> : children}</main> */}
      <main className=' bg-primary-light h-full overflow-y-scroll overflow-x-hidden lg:pt-[40px]'>{openMenu ? <MobileMenu setOpenMenu={setOpenMenu}/> : children}</main>
      <Footer />
    </div>
  )
}