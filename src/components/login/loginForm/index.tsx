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

  return (
    <form action="" className='flex flex-col space-y-3 justify-center items-center'>
      <Input
        state={'default'}
        label={'Email'}
        type={"input"}
        value={loginForm.email}
        onChange={handleChange}
        placeholder={'Email address'}
        className={'btn-xs'}
        name={'email'}
        startIcon={'email'}
      />
      <Input
        state={'default'}
        label={'Password'}
        type={"password"}
        value={loginForm.password}
        onChange={handleChange}
        placeholder={'Password'}
        className={'btn-xs'}
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
