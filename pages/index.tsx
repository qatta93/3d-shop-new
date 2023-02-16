import Button from '@/components/button'
import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image';
import FurnitureTypes from '@/components/furnitureTypes';

const Home: NextPage = () => {

  return (
    <section className='h-full overflow-y-scroll overflow-x-hidden pt-[80px]'>
      <section className='flex flex-col sm:flex-row px-[20px] sm:px-6 lg:px-[112px] items-center text-center sm:text-left pt-[60px]'>
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
      <section className='w-full pb-16 mt-14 sm:mt-20 bg-primary-bcg bg-no-repeat bg-cover'>
        <h2 className='text-center text-[26px] sm:text-[32px] -mb-6 xl:hidden'>PRODUCTS</h2>
        <div className='flex flex-wrap px-[20px] sm:px-6 lg:px-[112px]'>
          <h2 className='rotate-180 pb-[130px] pl-4 text-center text-[32px] -mb-6 hidden xl:block' style={{ writingMode: 'vertical-rl' }}>PRODUCTS</h2>
          <FurnitureTypes/>
        </div>
      </section>
    </section>
  )
}

export default Home
