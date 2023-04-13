import Input from '@/components/input'
import React from 'react'

export const Form = () => {  
  
  const onChange = () =>{
    return ''
  }

  return (
    <form action="">
      <Input
        state={'default'}
        label={'Name'}
        value={() => onChange()}
        placeholder={'Name *'}
        className={'btn-xs w-[350px]'}
        name={'Name'}
        startIcon={'user'}
      />
    </form>
  )
}
