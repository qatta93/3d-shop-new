import Button from '@/components/button'
import React, { useState } from 'react'
import Image from 'next/image';
import { Canvas } from '@react-three/fiber';
import Lights from '@/components/Lights';
import Model from '@/components/Model';

export const ItemCard = ({furniture}) => {
  const [showModel, setShowModel] = useState<number>(1);
  const views = [1, 2, 3];
  return (
    <article className='w-[320px] lg:w-[350px] mx-auto xl:mx-4 rounded-lg shadow-2xl mt-16'>
      <div className='h-[270px] relative cursor-pointer'>
      <section className='relative w-full h-full'>
        {/* @ts-ignore */}
        <Canvas camera={{ position: [0, 0, 300]}} > 
          <Lights />
          <Model id={furniture.id} furniture={furniture}/>
        </Canvas>
        <img src="/images/loupe.png" alt="loupe" className='opacity-20 w-8 absolute bottom-4 right-4' />
      </section>
        <section className='flex gap-[5px] my-2 absolute bottom-0 left-1/2 transform -translate-x-1/2'>
          {views.map((w:number) => {
            return <Image width={20} height={20} src={showModel === w ? "/images/circle_full.png" : "/images/circle.png"} alt="circle" className='cursor-pointer' onClick={() => setShowModel(w)}/>
          })}
        </section>
      </div>
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
        className={'btn-xs rounded-none rounded-b-lg'}
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
