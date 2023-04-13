import { NextPage } from 'next'
import React from 'react'
import LoginModal from '@/components/login';
import Image from 'next/image';



const Login: NextPage = () => {

  return (
    <section className='flex bg-white '>
      <div className='flex-1 relative bg-primary-light bg-[url(/images/bcg-purple.png)] bg-no-repeat bg-[left_0px_right_0px] bg-contain'>
        <Image src="/images/login-graph.png" alt="login"  layout='fill' className="absolute"/>
      </div>
      <div className='flex flex-1 py-10 align-middle justify-center'>
        <LoginModal />
      </div>
    </section>
  )
}

export default Login;