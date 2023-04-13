import { useContext } from 'react';
import Button from '@/components/button'
import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image';
import { Context } from "../context/AppContext"
import { ProductsList } from '@/components/ProductsList';

const Home: NextPage = () => {
   //@ts-ignore
  // const { state } = useContext(Context);
  // console.log(state)

  return (
    <>
      <section className='flex flex-col sm:flex-row px-[20px] sm:px-[40px] lg:px-[112px] items-center text-center sm:text-left'>
        <div>
          <h1 className='md:text-left'>Furniture for a better everyday life.</h1>
          <p className='pt-[31px] pb-[45px] max-w-[300px] lg:max-w-[400px] lg:leading-[32px] text-base sm:text-[20px] lg:text-[24px] font-light'>Have a look on our 3D models and find your perfect match!</p>
          <Link href={'/products'}>
            <Button
              variant={'primary'}
              className={'uppercase btn-sm sm:btn-md lg:btn-lg'}
              name={'see 3d models'}
              >
              see 3d models
            </Button>
          </Link>
        </div>
        <div className='relative flex h-[300px] w-[300px] xl:h-[450px] xl:w-[450px] mt-[100px] mx-auto sm:mr-0 lg:mr-12'>
          <div className='relative h-[200px] w-[250px] lg:h-[250px] lg:w-[300px] mx-auto'>
            <Image src="/images/bcg-yellow.png" alt="bcg"  layout='fill' className="absolute"/>
          </div>
          <Image src="/images/chair-main.png" alt="chair"  layout='fill' className="absolute"/>
        </div>
      </section>
      <ProductsList/>
    </>
  )
}

export default Home
