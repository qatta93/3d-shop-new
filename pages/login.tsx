import { NextPage } from 'next'
import React from 'react'
import LoginModal from '@/components/login';




const Login: NextPage = () => {

  return (
    <section className='flex justify-center bg-white '>
      <LoginModal />
    </section>
  )
}

export default Login;