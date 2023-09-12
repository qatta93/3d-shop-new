import React from 'react'
import { useContext } from 'react';
import { Context } from "context/AppContext";
import { ProductsCartModal } from './productsCartModal'
import { PaymentModal } from './productsCartModal/paymentModal'
import { EmptyCart } from '../emptyCart';

export const ProductsCart = ({dummyLocalStorage}:any) => {
    //@ts-ignore
    const { state, dispatch } = useContext(Context);
    console.log(state)
  return (
    <article className='flex flex-col lg:flex-row w-screen px-[10px] sm:px-[40px] lg:px-[112px] mb-12'>
      <div className='flex flex-[65%] align-middle justify-center'>
        {state.length > 0 ? <ProductsCartModal/> : <EmptyCart/> }
      </div>
      <div  className='flex flex-[35%] mx-auto lg:justify-end'>
        <PaymentModal/>
      </div>
    </article>
  )
}