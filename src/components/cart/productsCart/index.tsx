import React from 'react'

import { ProductsCartModal } from './productsCartModal'
import { PaymentModal } from './productsCartModal/paymentModal'

export const ProductsCart = ({dummyLocalStorage}:any) => {
  return (
    <article className='flex flex-col lg:flex-row w-screen px-[10px] sm:px-[40px] lg:px-[112px] mb-8'>
      <div className='flex flex-[65%] align-middle justify-center'>
        <ProductsCartModal />
      </div>
      <div  className='flex flex-[35%] mx-auto lg:justify-end'>
        <PaymentModal/>
      </div>
    </article>
  )
}