import React from 'react'
import FurnitureData from '@/components/furnitureData';
import furnitureTypes from "public/api/productsTypes.json"
import FurnitureTypesCard from './furnitureData/furnitureTypesCard'
import Image from 'next/image';

export const ProductsList = () => {
  return (
    <div className='w-full bg-primary-bcg bg-no-repeat bg-cover sm:bg-top'>
      <section className='pb-24 mt-14 sm:mt-20 lg:mt-0'>
        <h2 className='text-center text-[26px] sm:text-[32px] -mb-6 xl:hidden'>PRODUCTS</h2>
        <div className='flex flex-wrap xl:flex-nowrap px-[20px] sm:px-[40px] lg:px-[112px]'>
          <h2 className='rotate-180 pb-[130px] pl-4 text-center text-[32px] -mb-6 hidden xl:block' style={{ writingMode: 'vertical-rl' }}>PRODUCTS</h2>
          <FurnitureData data={furnitureTypes} Component={FurnitureTypesCard}/>
          <div className='relative h-[40px] w-[40px] ml-4 mt-60 hidden xl:block'>
            <Image src="/images/arrow-right.png" alt="arrow"  layout='fill' className="absolute cursor-pointer"/>
          </div>
        </div>
      </section>
    </div>
  )
}
