import Button from '@/components/button'
import React from 'react'
import Image from 'next/image';

export const ItemCard = ({furniture}) => {
  return (
    <article className='w-[320px] lg:w-[350px] mx-auto xl:mx-4 rounded-lg shadow-2xl mt-16'>
      <div className='h-[270px]'></div>
      <section className='bg-primary-light px-6 py-4'>
        <div className='flex justify-between text-[18px] font-semibold'>
          <p>{furniture.name}</p>
          <p>{furniture.price}</p>
        </div>
        <p className='text-xs font-light pt-2 text-justify'>{furniture.description}</p>
      </section>
      <section>
      <Button
        variant={'primary'}
        className={'btn-xs w-full rounded-none rounded-b-lg'}
        name={'Add to cart'}
        startIcon={<Image src="/images/cart.png" alt="cart" height={20} width={25}/>
      }
        >
        Add to cart
      </Button>
      </section>
    </article>
  )
}
