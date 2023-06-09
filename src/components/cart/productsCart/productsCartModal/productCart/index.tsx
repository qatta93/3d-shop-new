import React from 'react'
import Image from 'next/image';


export const ProductCart = ({product}:any) => {
  return (
    <article className='flex flex-row py-4 border-b-[1px] justify-between'>
      <div className=' bg-primary-light relative p-2'>
        <Image src={product.img} alt={product.name}  width={80} height={80}/>
      </div>
      <div className='flex flex-col my-auto'>
        <p className='text-[14px]'>{product.type}</p>
        <p className='text-[14px] sm:text-[16px] font-semibold'>{product.name}</p>
      </div>
      <div className='flex flex-row my-auto'>
        <p className='text-grey-light text-[35px] my-auto p-2 sm:p-4'>-</p>
        <p className='text-[18px] font-bold my-auto'>1</p>
        <p className='text-grey-light text-[25px] my-auto p-2 sm:p-4'>+</p>
      </div>
      <p className='text-[14px] sm:text-[18px] font-bold my-auto'>{product.price}</p>
      <p className='pl-4 sm:pl-0 text-[18px] sm:text-[24px] font-semibold my-auto'>X</p>

    </article>
  )
}