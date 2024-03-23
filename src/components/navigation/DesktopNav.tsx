'use client'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { Context } from "context/AppContext";
import Image from 'next/image';
import { DesktopNavProps } from '../types';
import NavLink from './NavLink';
import { useRouter } from "next/dist/client/router";

export const DesktopNav = ({session, signIn, signOut}:DesktopNavProps) => {
  // @ts-ignore
  // const { state, dispatch } = useContext(Context);

  const [showFilledCartIcon, setShowFilledCartIcon] = useState(false)

  // const findQuantity = state.map(item => item.quantity);
  // const totalQuantity = findQuantity.reduce((partialSum, a) => partialSum + a, 0);

  const router = useRouter();

  useEffect(() => {
    if(((typeof window !== "undefined" && router.asPath.indexOf("cart") > -1))){
      return setShowFilledCartIcon(true)
    }
    return setShowFilledCartIcon(false)
  }, [router.asPath])

  return (
    <div className='flex h-[35px]'>
      <NavLink href={'/'}>home</NavLink>
      <NavLink href={'/products'}>products</NavLink>
      {/* {session ?
        <NavLink href={'/auth/signin'} onClick={() => signOut()}>logout</NavLink>
        :
        <NavLink href={'/auth/signin'} onClick={() => signIn()}>login</NavLink>
      } */}
      
      <NavLink href={'/login'}>login</NavLink>
      <NavLink href={'/cart'}>
        <div className='relative h-[28px] w-[33px] lg:h-[35px] lg:w-[40px]'>
             {showFilledCartIcon ?
              <Image src="/images/cart-filled.png" alt="cart" layout='fill' className="absolute ml-16px lg:ml-27px"/>
              :
              <Image src="/images/cart.png" alt="cart" layout='fill' className="absolute ml-16px lg:ml-27px"/>
              }
              {/* {totalQuantity > 0 ?
              <div className="absolute -right-1 z-10 w-6 h-6 rounded-full inline-flex items-center justify-center bg-white  text-[14px] font-semibold border-solid border-[1px] border-grey-dark">
              {totalQuantity}
              </div>
              :
              ''
            } */}
        </div>
      </NavLink>
    </div>
  )
}
