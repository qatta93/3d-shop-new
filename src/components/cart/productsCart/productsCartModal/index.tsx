import React from 'react'
import { useState, useContext } from 'react';
import { Context } from "context/AppContext";
import Image from 'next/image';
import Link from 'next/link';
import { ProductCart } from './productCart';
import furniture from "public/api/itemsDetails.json"
import { FurnitureDetailsProps, ProductInState } from '@/components/types';


export const ProductsCartModal = () => {
    //@ts-ignore
  const { state, dispatch } = useContext(Context);

  const productsQuantityPrice = state.length > 0 && state.map((item:ProductInState) => {
    const itemPrice = furniture.filter((product:FurnitureDetailsProps) => product.id === item.products)[0].price.slice(0, -1);
    return Number(itemPrice) * item.quantity;
  });

  const totalPrice = productsQuantityPrice.length > 0 && productsQuantityPrice.reduce((a:number, b:number) => a + b, 0);

  return (
    <article className='flex flex-col w-full mt-12 sm:pr-10'>
      {state && state.map(product => {
        return <ProductCart product={product.products} key={product.products} quantity={product.quantity}/>
      })}
      <div className='flex flex-row w-full justify-between mt-10'>
        <Link href='/products'>
          <div className='flex flex-row'>
            <div className='h-[27px] w-[27px] sm:h-[35px] sm:w-[35px] relative mx-auto my-auto'>
            <Image src="/images/arrow-left.png" alt="back" layout='fill' className='cursor-pointer' />
            </div>
            <p className='ml-4 text-md sm:text-lg leading-[36px] sm:leading-[34px] cursor-pointer'>CONTINUE SHOPPING</p>
          </div>
        </Link>
        <p className='text-[20px] sm:text-[24px] leading-[34px] font-bold'><span className='text-grey-light sm:text-[16px] mr-4'>TOTAL</span>{totalPrice}$</p>
      </div>
    </article>
  )
}