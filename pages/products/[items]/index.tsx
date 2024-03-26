import { NextPage } from 'next'
import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import FurnitureData from '@/components/furnitureData';
import itemsDetails from "public/api/itemsDetails.json"
import { ItemCard } from '@/components/furnitureData/itemCard';

const Products: NextPage = () => {
  const router = useRouter();
  const { items } = router.query;

  //    @ts-ignore
  // const { state } = useContext(Context);
  // console.log(state)

  const currentItems = itemsDetails.filter((item) => item.type === items)

  return (
    <section className='flex flex-col lg:flex-row min-h-[calc(100vh-50px)] bg-white mb-[3px]'>
      <div className='px-[20px] pb-20 sm:px-[50px] lg:px-[80px] xl:px-[100px] pt-[70px] md:pt-[130px]'>
        <section className='flex-1 mx-auto sm:pl-8 xl:pl-0 max-w-[700px] lg:ml-12 xl:ml-20 '>
          <h1>{items}</h1>
          <p className='mt-4 text-[14px] xl:text-[18px] font-light text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <hr className="h-[2px] w-[250px] md:w-[350px] bg-secondary-medium mx-auto mt-10"/>
        </section>
        <section className='flex-1'>
          <div className='flex flex-wrap justify-between gap-x-1'>
            {/* <div className='relative h-[40px] w-[40px] mt-64 hidden xl:block'>
              <Image src="/images/arrow-left.png" alt="arrow"  height={40} width={40} className="absolute cursor-pointer"/>
            </div> */}
            <FurnitureData data={currentItems} Component={ItemCard}/>
            {/* <div className='relative h-[40px] w-[40px] mt-64 hidden xl:block'>
            <Image src="/images/arrow-right.png" alt="arrow"  layout='fill' className="absolute cursor-pointer"/>
            </div> */}
          </div>
        </section>
      </div>
      <section className='flex-auto mt-4 bg-furniture-bcg bg-cover bg-no-repeat' />
    </section>
  )
}

export default Products;
