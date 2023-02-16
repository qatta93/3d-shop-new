import Button from '@/components/button'
import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image';
import FurnitureTypes from '@/components/furnitureTypes';

const Home: NextPage = () => {

  return (
    <section className='h-full overflow-scroll'>
      <section className='flex flex-col sm:flex-row px-[20px] sm:px-[40px] items-center text-center sm:text-left pt-[60px]'>
        <div>
          <h1 className='font-changa-one max-w-[300px] text-[31px] leading-[38px] sm:text-[42px]'>Furniture for a better everyday life.</h1>
          <p className='pt-[31px] pb-[45px] max-w-[300px] text-base font-light'>Have a look on our 3D models and find your perfect match!</p>
          <Link href={'/products'}>
            <Button
              variant={'primary'}
              className={'uppercase'}
              size={'sm'}>
              see 3d models
            </Button>
          </Link>
        </div>
        <div className='relative h-[300px] w-[300px] mt-[100px] mx-auto'>
          <div className='relative h-[200px] w-[250px] mx-auto'>
            <Image src="/images/bcg-yellow.png" alt="bcg"  layout='fill' className="absolute"/>
          </div>
          <Image src="/images/chair-main.png" alt="chair"  layout='fill' className="absolute"/>
        </div>
      </section>
      <section className='w-full mb-16 mt-14 bg-primary-bcg bg-no-repeat bg-cover'>
        <div className='grid grid-cols-1 gap-40 px-[20px] sm:px-[40px]'>
          <h2 className='text-center text-[32px] -mb-6'>PRODUCTS</h2>
          <FurnitureTypes/>
        </div>
      </section>
    </section>
  )
}

export default Home
