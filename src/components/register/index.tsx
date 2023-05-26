import React from 'react'
import { RegisterForm } from './registerForm';

const RegisterModal = ({setShowLoginModal}) => {
  return (
    <section className='flex flex-col justify-center items-center space-y-3 max-w-[450px] p-[45px]'>
      <h1>Register</h1>
      <p className='pb-10'>We are happy to have you with us!</p>
      <RegisterForm />
      <section className='text-center pt-10'>
        <p>Already have an account?</p>
        <button className='font-bold' onClick={() => setShowLoginModal(((current:boolean) => !current))}>Login</button>
      </section>
    </section>
  )
}

export default RegisterModal;