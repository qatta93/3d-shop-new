import Button from '@/components/button'
import Input from '@/components/input'
import { RegisterFormProps } from '@/components/types'
import React, { useState } from 'react'

export const RegisterForm = () => {  
  
  const [registerForm, setRegisterForm] = useState<RegisterFormProps>({
    name: '',
    email: '',
    password: '',
    repeatPassword: ''
  })

  const handleChange = (evt) => {
    const { name, value } = evt.target;
      setRegisterForm({
      ...registerForm,
      [name]: value,
    });
  };

  console.log(registerForm)

  return (
    <form action="" className='flex flex-col space-y-3 justify-center items-center'>
      <Input
        state={'default'}
        label={'Name'}
        value={registerForm.name}
        onChange={handleChange}
        placeholder={'Name*'}
        className={'btn-xs'}
        name={'name'}
        startIcon={'user'}
      />
      <Input
        state={'default'}
        label={'Email'}
        value={registerForm.email}
        onChange={handleChange}
        placeholder={'Email address*'}
        className={'btn-xs'}
        name={'email'}
        startIcon={'email'}
      />
      <Input
        state={'default'}
        label={'Password'}
        type={'password'}
        value={registerForm.password}
        onChange={handleChange}
        placeholder={'Password*'}
        className={'btn-xs'}
        name={'password'}
        startIcon={'lock'}
      />
      <Input
        state={'default'}
        label={'Password'}
        type={'password'}
        value={registerForm.repeatPassword}
        onChange={handleChange}
        placeholder={'Repeat password*'}
        className={'btn-xs'}
        name={'repeatPassword'}
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
