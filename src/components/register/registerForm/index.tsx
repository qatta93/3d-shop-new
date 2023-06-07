import Button from '@/components/button'
import Input from '@/components/input'
import React, { useState } from 'react'

interface RegisterFormProps {
  name: string,
  email: string,
  password: string,
  repeatPassword: string,
}

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
        className={'btn-xs w-[350px]'}
        name={'name'}
        startIcon={'user'}
      />
      <Input
        state={'default'}
        label={'Email'}
        value={registerForm.email}
        onChange={handleChange}
        placeholder={'Email address*'}
        className={'btn-xs w-[350px]'}
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
        className={'btn-xs w-[350px]'}
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
        className={'btn-xs w-[350px]'}
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
