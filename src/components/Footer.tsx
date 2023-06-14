import React from 'react'

export const Footer = () => {
  return (
    <footer className='absolute bottom-[-50px] h-[50px] border-t-[2px] border-primary-light w-full font-cormorant justify-center flex font-light italic text-lg bg-white'>
      <a href="https://portfolio23-nu.vercel.app/" target="_blank" rel="noreferrer" className='cursor-pointer my-auto'>Coded with passion by Qatta @{(new Date().getFullYear())}</a>
    </footer>
  )
}
