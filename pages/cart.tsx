import { EmptyCart } from '@/components/cart/emptyCart';
import { ProductsCart } from '@/components/cart/productsCart';


import { NextPage } from 'next'
import React from 'react'



const Cart: NextPage = () => {

  const dummyLocalStorage = [{
    "id": "table2",
    "type": "tables",
    "name": "Antique Table",
    "price": "300$",
    "color": "oak",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",  
    "embed": "https://sketchfab.com/models/f01054c29829452a9f87437de57a3f6f/embed",
    "img": "/images/table2.png"
  },
  {
    "id": "lamp1",
    "type": "lamps",
    "name": "Night Lamp",
    "price": "65$",
    "color": "steel",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",  
    "embed": "https://sketchfab.com/models/59caa390eda24394bd58156da32e4ef4/embed",
    "img": "/images/lamp1.png"
  }]


  return (
    <section className='flex flex-col  overflow-scroll  bg-white px-[30px] sm:px-[40px] lg:px-[112px] items-center text-center sm:text-left'>
      <div className='flex w-full pt-20'>
        <h1 className='lg:ml-0'>Shopping Cart</h1>      
      </div>
      <div className='flex items-center justify-center'>
        {dummyLocalStorage.length > 0 ?
        <ProductsCart dummyLocalStorage={dummyLocalStorage}/>
        :
        <EmptyCart/>
        }
      </div>
    </section>
  )
}

export default Cart;
