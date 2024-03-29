'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { MobileNavProps } from '../types';
import NavLink from './NavLink';
import { useContext } from 'react';
import { Context } from "context/AppContext";

export const MobileNav = ({openMenu, setOpenMenu}:MobileNavProps) => {
    //@ts-ignore
    const { state, dispatch } = useContext(Context);

    const findQuantity = state && state.map(item => item.quantity);
    const totalQuantity = findQuantity && findQuantity.reduce((partialSum, a) => partialSum + a, 0);    

    const [showFilledCartIcon, setShowFilledCartIcon] = useState(false)
  
    useEffect(() => {
      if(((typeof window !== "undefined" && window.location.href.indexOf("cart") > -1))){
        return setShowFilledCartIcon(false)
      }
      return setShowFilledCartIcon(true)
    }, [])

  return (
    <div className='flex'>
      <NavLink href={'/cart'}>
        <div className='relative h-[28px] w-[33px] lg:h-[35px] lg:w-[40px] mr-2'>
            <>
             {showFilledCartIcon ?
              <Image src="/images/cart-filled.png" alt="cart" layout='fill' className="absolute ml-16px lg:ml-27px"/>
              :
              <Image src="/images/cart.png" alt="cart" layout='fill' className="absolute ml-16px lg:ml-27px"/>
              } 
              {totalQuantity > 0 && 
              <p className="absolute -right-1 z-10 w-6 h-6 rounded-full inline-flex items-center justify-center bg-white  text-[14px] font-semibold border-solid border-[1px] border-grey-dark">
              {totalQuantity}
              </p>
              }
            </>
        </div>
      </NavLink>
      {openMenu ? 
      <Image src="/images/close.png" alt="close"  height={25} width={25} onClick={() => setOpenMenu(!openMenu)}/>
      :
      <Image src="/images/menu.png" alt="menu"  height={25} width={35} onClick={() => setOpenMenu(!openMenu)}/>}
    </div>
  )
}
