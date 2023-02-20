import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export const FurnitureTypesCard = ({furniture}) => {

  return (
    <Link href={`/products/${furniture.name}`}>
      <a className='relative max-w-xs mx-auto hover:opacity-70 hover:scale-102 w-full pt-20 mt-40 rounded-[10px] shadow-xl bg-white text-center hover:no-underline'>
        <div className='absolute -top-20 left-0 right-0'>
          <div className='relative h-40 w-40 mx-auto'>
            <Image src={furniture.img} alt="furniture" layout='fill'/>
          </div>
        </div>
        <p className='text-[24px] font-bold mt-[40px] sm:mt-[50px] no-underline'>{furniture.name}</p>
        <p className='text-[18px] font-light mt-3 pb-6'>from {furniture.price}</p>
      </a>
    </Link>
  )
}

export default FurnitureTypesCard;