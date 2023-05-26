import Button from '@/components/button'
import Input from '@/components/input'
import React from 'react'

export const RegisterForm = () => {  
  
  const onChange = () =>{
    return ''
  }

  return (
    <form action="" className='flex flex-col space-y-3 justify-center items-center'>
      <Input
        state={'default'}
        label={'Name'}
        value={() => onChange()}
        placeholder={'Name*'}
        className={'btn-xs w-[350px]'}
        name={'name'}
        startIcon={'user'}
      />
      <Input
        state={'default'}
        label={'Email'}
        value={() => onChange()}
        placeholder={'Email address*'}
        className={'btn-xs w-[350px]'}
        name={'email'}
        startIcon={'email'}
      />
      <Input
        state={'default'}
        label={'Password'}
        value={() => onChange()}
        placeholder={'Password*'}
        className={'btn-xs w-[350px]'}
        name={'Password'}
        startIcon={'lock'}
      />
      <Input
        state={'default'}
        label={'Password'}
        value={() => onChange()}
        placeholder={'Repeat password*'}
        className={'btn-xs w-[350px]'}
        name={'Password'}
        startIcon={'lock'}
      />
      <Button
        variant={'primary'}
        className={'uppercase btn-xs'}
        name={'continue'}
        type={'submit'}
        >
        REGISTER
      </Button>
    </form>
  )
}
