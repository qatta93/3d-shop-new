import Button from '@/components/button';
import Image from 'next/image';
import Link from 'next/link';

export const EmptyCart = () => {  
  
  return (
    <section className='flex flex-col items-center justify-center overflow-y-scroll'>
      <div className='relative h-[350px] w-[350px] lg:h-[420px] lg:w-[400px] mx-auto'>
        <Image src="/images/cart-empty.png" alt="bcg"  layout='fill' className="absolute"/>
      </div>
      <h2 className='text-center text-[30px] mb-8'>NO ITEMS IN CART</h2>
      <Link href={'/products'}>
        <Button
          variant={'primary'}
          className={'uppercase btn-xs'}
          name={'continue'}
          type={'submit'}
          >
          SHOP NOW
        </Button>
      </Link>
    </section>
  )
}
