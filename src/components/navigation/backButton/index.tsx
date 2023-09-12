import Router from 'next/router'
import Image from 'next/image';

export const BackButton = () => {  
  
  return (
    <div onClick={() => Router.back()} className='flex cursor-pointer gap-2'>
      <Image src="/images/arrow-left.png" alt="back"  width={25} height={20}/>
      <p>Back</p>
    </div>
  )
}