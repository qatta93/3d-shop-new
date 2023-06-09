import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { DesktopNavProps } from '../types';
import NavLink from './NavLink';


export const DesktopNav = ({session, signIn, signOut}:DesktopNavProps) => {
  const [activeCart, setActiveCart] = useState(false)

  const handleGetClassName = e => {
    console.log(e.currentTarget.className)
    setActiveCart(e.currentTarget.className === 'linkNav-active' ? true : false);
  };

  console.log(window.location.pathname)

  return (
    <div className='flex'>
      <NavLink href={'/'}><a>home</a></NavLink>
      <NavLink href={'/products'}><a>products</a></NavLink>
      {/* {session ?
        <NavLink href={'/auth/signin'}><a onClick={() => signOut()}>logout</a></NavLink>
        :
        <NavLink href={'/auth/signin'}><a onClick={() => signIn()}>login</a></NavLink>
      } */}
      <NavLink href={'/login'}><a>login</a></NavLink>
      <NavLink href={'/cart'} onClick={(e) => handleGetClassName(e)}>
        <a>
          <div className='relative h-[28px] w-[33px] lg:h-[35px] lg:w-[40px]'  >
            {(window.location.href.indexOf("cart") > -1) ?
              <Image src="/images/cart-filled.png" alt="cart" layout='fill' className="absolute ml-16px lg:ml-27px"/>
              :
              <Image src="/images/cart.png" alt="cart" layout='fill' className="absolute ml-16px lg:ml-27px"/>
            }
          </div>
        </a>
      </NavLink>
    </div>
  )
}
