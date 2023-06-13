import Button from '@/components/button'
import Image from 'next/image';
import { Canvas } from '@react-three/fiber';
import Lights from '@/components/Lights';
import Model from '@/components/Model';
import { EmbedModelPopup } from '@/components/EmbedModelPopup';
import { useState } from 'react';

export const ItemCard = ({furniture}) => {
  const [showEmbedModelPopup, setShowEmbedModelPopup] = useState<boolean>(false)

  return (
    <article className='w-[350px] mx-auto xl:mx-4 rounded-lg shadow-2xl mt-16'>
      {showEmbedModelPopup && <EmbedModelPopup furniture={furniture} setShowEmbedModelPopup={setShowEmbedModelPopup}/>}
      <div className='h-[270px] relative cursor-pointer' onClick={() => setShowEmbedModelPopup(true)}>
        {/* @ts-ignore */}
        <Canvas camera={{ position: [0, 0, 300]}} > 
          <Lights />
          <Model id={furniture.id} furniture={furniture}/>
        </Canvas>
        <div className='absolute bottom-2 right-4'>
          <Image width={50} height={50} src="/images/loupe.png" alt="loupe" className=' w-8 ' />
        </div>
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
