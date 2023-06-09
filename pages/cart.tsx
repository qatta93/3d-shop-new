import { EmptyCart } from '@/components/cart/emptyCart';
import { NextPage } from 'next'
import React from 'react'



const Cart: NextPage = () => {

  return (
    <section className='flex flex-col bg-white px-[20px] sm:px-[40px] lg:px-[112px] items-center text-center sm:text-left'>
      <div className='flex py-16 align-middle justify-center'>
        <h1>Shopping Cart</h1>      
      </div>
      <div className='flex items-center justify-center h-full'>
       <EmptyCart/>
      </div>

    </section>
  )
}

export default Cart;
