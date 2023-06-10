import React from 'react'
import Image from 'next/image';
import { ProductCart } from './productCart';

const dummyLocalStorage = [{
  "id": "table2",
  "type": "tables",
  "name": "Antique Table",
  "price": "300 $",
  "color": "oak",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",  
  "embed": "https://sketchfab.com/models/f01054c29829452a9f87437de57a3f6f/embed",
  "img": "/images/types-table.png"
},
{
  "id": "lamp1",
  "type": "lamps",
  "name": "Night Lamp",
  "price": "65 $",
  "color": "steel",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",  
  "embed": "https://sketchfab.com/models/59caa390eda24394bd58156da32e4ef4/embed",
  "img": "/images/types-lamp.png"
}]

export const ProductsCartModal = () => {
  return (
    <article className='flex flex-col w-full mt-12 sm:pr-10'>
      {dummyLocalStorage.map(product => {
        return <ProductCart product={product} key={product.id}/>
      })}
      <div className='flex flex-row w-full justify-between mt-10'>
        <div className='flex flex-row'>
          <div className='h-[27px] w-[27px] sm:h-[35px] sm:w-[35px] relative mx-auto my-auto'>
          <Image src="/images/arrow-left.png" alt="back" layout='fill'/>
          </div>
          <p className='ml-4 text-md sm:text-lg leading-[36px] sm:leading-[34px]'>CONTINUE SHOPPING</p>
        </div>
        <p className='text-[20px] sm:text-[24px] leading-[34px] font-bold'><span className='text-grey-light sm:text-[16px] mr-4'>TOTAL</span>365$</p>
      </div>
    </article>
  )
}