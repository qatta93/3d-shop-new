import React from 'react'
import { useContext } from 'react';
import { Context } from "context/AppContext";
import Image from 'next/image';
import furniture from "public/api/itemsDetails.json"

export const ProductCart = ({product, quantity}:any) => {
  //@ts-ignore
  const { state, dispatch } = useContext(Context);
  const productDetails = furniture.filter(item => item.id === product)[0] 

  const findProductInState = state.filter(item => item.products === product)
  const findInitialProductQuantity = findProductInState.map(item => item.quantity)

  const addToCart = () => {
    dispatch({
    type: "ADD_PRODUCT_QUANTITY",
    payload: product,
    payloadQuantity: findInitialProductQuantity,
    })
  }

  const subtractFromCart = () => {
    dispatch({
      type: "SUBTRACT_PRODUCT_QUANTITY",
      payload: product,
      payloadQuantity: findInitialProductQuantity,
    })
  }

  const deleteFromCart = () => {
    dispatch({
      type: "DELETE_PRODUCT_FROM_CART",
      payload: product,
    })
  }

  return (
    quantity > 0 &&
    <article className='flex flex-row py-4 border-b-[1px] justify-between'>
      <div className=' bg-primary-light relative p-2'>
        <Image src={productDetails.img} alt={productDetails.name}  width={80} height={80}/>
      </div>
      <div className='flex flex-col my-auto'>
        <p className='text-[14px]'>{productDetails.type}</p>
        <p className='text-[14px] sm:text-[16px] font-semibold'>{productDetails.name}</p>
      </div>
      <div className='flex flex-row my-auto'>
        <p className='text-grey-light text-[35px] my-auto p-2 sm:p-4' onClick={() => subtractFromCart()}>-</p>
        <p className='text-[18px] font-bold my-auto'>{quantity}</p>
        <p className='text-grey-light text-[25px] my-auto p-2 sm:p-4' onClick={() => addToCart()}>+</p>
      </div>
      <p className='text-[14px] sm:text-[18px] font-bold my-auto'>{productDetails.price}</p>
      <p className='pl-4 sm:pl-0 text-[18px] sm:text-[24px] font-semibold my-auto' onClick={() => deleteFromCart()}>X</p>
    </article>
  )
}