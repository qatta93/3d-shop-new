import Button from '@/components/button';
import Input from '@/components/input'
import React, { useState } from 'react'


export const PaymentModal = () => {
  
  const [cardDetails, setCardDetails] = useState<any>({
    email: "",
    password: "",
  })

  const handleChange = (evt) => {
    const { name, value } = evt.target;
      setCardDetails({
      ...cardDetails,
      [name]: value,
    });
  };
  return (
    <article className='flex flex-col gap-3 relative justify-center pt-20 lg:mt-[-40px] h-[650px] w-[320px] bg-grey-dark rounded-lg'>
      <h2 className='text-white text-center text-[20px]'>Payment Details</h2>
      <Input
        state={'default'}
        label={'Name'}
        type={"input"}
        value={''}
        onChange={handleChange}
        placeholder={'Name'}
        className={'btn-xs w-[290px]'}
        name={'name'}
      />
      <Input
        state={'default'}
        label={'Card number'}
        type={"number"}
        value={''}
        onChange={handleChange}
        placeholder={'Card number'}
        className={'btn-xs w-[290px]'}
        name={'card-number'}
      />
      <Input
        state={'default'}
        label={'Expiration date'}
        type={"input"}
        value={''}
        onChange={handleChange}
        placeholder={'Expiration date'}
        className={'btn-xs w-[290px]'}
        name={'card-number'}
      />
      <Input
        state={'default'}
        label={'CVC'}
        type={"number"}
        value={''}
        onChange={handleChange}
        placeholder={'CVC'}
        className={'btn-xs w-[290px]'}
        name={'cvc'}
      />
      <Button
        variant={'primary'}
        className={'uppercase btn-xs w-[320px] rounded-t-none absolute bottom-0'}
        name={'continue'}
        type={'submit'}
        >
        CONTINUE TO CHECKOUT
      </Button>

    </article>
  )
}