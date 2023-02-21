import { NextPage } from 'next'
import React from 'react'
import { useRouter } from 'next/router';
import FurnitureData from '@/components/furnitureData';
import itemsDetails from "public/api/itemsDetails.json"
import { ItemCard } from '@/components/furnitureData/itemCard';

const Products: NextPage = () => {
  const router = useRouter();
  const { items } = router.query;

  const currentItems = itemsDetails.filter((item) => (item.type.charAt(0).toUpperCase() + item.type.slice(1)) === items)

  return (
    <section className='flex flex-col sm:flex-row px-[20px] pb-20 sm:px-[50px] lg:px-[160px] xl:px-[200px] pt-[130px] items-center text-center sm:text-left bg-white-bcg bg-no-repeat bg-cover bg-center'>
      <div className='flex-1 mx-auto sm:pl-8 xl:pl-0 max-w-[500px] lg:ml-12 xl:ml-20 '>
        <h1>{items}</h1>
        <p className='mt-4 text-[14px] xl:text-[18px] font-light text-center sm:text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <hr className="h-[2px] w-[250px] md:w-[350px] bg-secondary-medium mx-auto mt-10"/>
      </div>
      <FurnitureData data={currentItems} Component={ItemCard}/>
    </section>
  )
}

export default Products;
