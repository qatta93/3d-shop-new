import React from 'react'
import Button from '../button';
import Image from 'next/image';
import { LoginForm } from './loginForm';

const LoginModal = ({setShowLoginModal}) => {
  return (
    <section className='flex flex-col justify-center items-center space-y-3 max-w-[450px] p-[45px]'>
      <h1>Login</h1>
      <p className='pb-10'>We are happy to have you with us!</p>
      <Button
        variant={'secondary'}
        className={'btn-xs w-[350px]'}
        name={'Continue with Google'}
        startIcon={<Image src="/images/google.png" alt="google-login" height={25} width={25}/>
      }
        >
        Continue with Google
      </Button>
      <Button
        variant={'secondary'}
        className={'btn-xs w-[350px]'}
        name={'Continue with Github'}
        startIcon={<Image src="/images/github.png" alt="github-login" height={25} width={25}/>
      }
        >
        Continue with Github
      </Button>
      <div className='w-full'>
        <p className="w-full border-b-[1px] border-primary leading-[2px] text-center my-6"><span className="bg-white px-2 text-primary">or</span></p>
      </div>
      <LoginForm />
      <section className='text-center pt-10'>
        <p>Don't have an account?</p>
        <button className='font-bold' onClick={() => setShowLoginModal(((current:boolean) => !current))}>Register</button>
      </section>

    </section>
  )
}

export default LoginModal;