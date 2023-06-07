import Button from '@/components/button'
import Input from '@/components/input'
import { LoginFormProps } from '@/components/types'
import React, { useState } from 'react'

export const LoginForm = () => {  

  const [loginForm, setLoginForm] = useState<LoginFormProps>({
    email: "",
    password: "",
  })

  const handleChange = (evt) => {
    const { name, value } = evt.target;
      setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  console.log(loginForm)

  return (
    <form action="" className='flex flex-col space-y-3 justify-center items-center'>
      <Input
        state={'default'}
        label={'Email'}
        value={loginForm.email}
        onChange={handleChange}
        placeholder={'Email address'}
        className={'btn-xs w-[350px]'}
        name={'email'}
        startIcon={'email'}
      />
      <Input
        state={'default'}
        label={'Password'}
        value={loginForm.password}
        onChange={handleChange}
        placeholder={'Password'}
        className={'btn-xs w-[350px]'}
        name={'password'}
        startIcon={'lock'}
      />
      <Button
        variant={'primary'}
        className={'uppercase btn-xs'}
        name={'continue'}
        type={'submit'}
        >
        CONTINUE
      </Button>
    </form>
  )
}
