import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { DesktopNavProps } from '../types';
import NavLink from './NavLink';


export const DesktopNav = ({session, signIn, signOut}:DesktopNavProps) => {

  return (
    <div className='flex h-[35px]'>
      <NavLink href={'/'}><a>home</a></NavLink>
      <NavLink href={'/products'}><a>products</a></NavLink>
      {/* {session ?
        <NavLink href={'/auth/signin'}><a onClick={() => signOut()}>logout</a></NavLink>
        :
        <NavLink href={'/auth/signin'}><a onClick={() => signIn()}>login</a></NavLink>
      } */}
      <NavLink href={'/login'}><a>login</a></NavLink>
      <NavLink href={'/cart'}>
        <div className='relative h-[28px] w-[33px] lg:h-[35px] lg:w-[40px]'>
          {(window.location.href.indexOf("cart") > -1) ?
            <Image src="/images/cart-filled.png" alt="cart" layout='fill' className="absolute ml-16px lg:ml-27px"/>
            :
            <Image src="/images/cart.png" alt="cart" layout='fill' className="absolute ml-16px lg:ml-27px"/>
          }
        </div>
      </NavLink>
    </div>
  )
}
