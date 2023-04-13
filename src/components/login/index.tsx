import React from 'react'
import Button from '../button';
import Image from 'next/image';
import { Form } from './form';

const LoginModal = () => {
  return (
    <section className='flex flex-col justify-center items-center space-y-3 max-w-[450px] p-[45px] bg-red-50'>
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
      <Form />

    </section>
  )
}

export default LoginModal;