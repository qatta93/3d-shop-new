import React from 'react'
import Image from 'next/image';
import { ProductsList } from '@/components/ProductsList';

export const Products = () => {
  return (
    <>
      <section className='px-[20px] pb-20 sm:px-[50px] lg:px-[160px] xl:px-[200px] pt-[130px] items-center text-center sm:text-left bg-white-bcg bg-no-repeat bg-cover bg-center'>
        <div className='flex flex-col sm:flex-row max-w-[1000px] mx-auto'>
          <div className='flex-1 max-w-[400px] hidden sm:block relative h-[275px] w-[300px] lg:h-[250px] lg:w-[300px] mx-0'>
            <Image src="/images/chair-products.png" alt="chair-background"  layout='fill' className="absolute" priority/>
          </div>
          <div className='flex-1 mx-auto sm:pl-8 xl:pl-0 max-w-[500px] lg:ml-12 xl:ml-20 '>
            <h1>Products</h1>
            <h2 className='mt-6 text-[20px] xl:text-[24px] font-changa-one text-center'>What does your <span className='text-secondary-dark mx-1'>Home</span> need?</h2>
            <p className='mt-4 text-[14px] xl:text-[18px] font-light text-center sm:text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className='sm:hidden mt-6 relative h-[275px] w-[300px] lg:h-[250px] lg:w-[300px] mx-auto'>
            <Image src="/images/chair-products.png" alt="chair-background"  layout='fill' className="absolute"/>
          </div>
        </div>
      </section>
      <ProductsList/>
    </>
  )
}

export default Products;