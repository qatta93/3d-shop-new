import React from 'react'

export const ItemCard = ({furniture}) => {
  return (
    <article className='w-[320px] mx-auto p-6 bg-slate-100 rounded-lg'>
      <div className='h-[200px]'></div>
      <section>
        <div className='flex justify-between text-[18px] font-semibold'>
          <p>{furniture.name}</p>
          <p>{furniture.price}</p>
        </div>
        <p className='text-xs font-light pt-2 text-justify'>{furniture.description}</p>
      </section>
      <section>

      </section>
    </article>
  )
}
