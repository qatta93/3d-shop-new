import Button from "@/components/button";
import Input from "@/components/input";
import React, { useState } from "react";
import Image from "next/image";

export const PaymentModal = () => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <article className=" bg-grey-dark relative mt-20 pt-[20px] lg:mt-[-40px] h-[650px] w-[320px] rounded-lg">
      <h2 className="text-white text-center text-[20px]">Payment Details</h2>
      <div className="w-[340px] absolute right-[-10px] sm:right-3 top-20">
        <div className="w-[340px] h-56 m-auto rounded-xl relative text-white shadow-2xl  transition-transform transform hover:scale-110">
          <Image
            src={"/images/card-bcg.png"}
            alt={"cos"}
            layout="fill"
            className="relative object-cover w-full h-full rounded-xl"
          />
          <div className="w-full px-8 absolute top-8">
            <div className="flex justify-between">
              <div className="">{state.name ? state.name : "Name"}</div>
              <Image
                src="/images/mastercard.png"
                alt="mastercard"
                width={60}
                height={40}
              />
            </div>
            <div className="pt-4">
              <p className="font-light">Card Number</p>
              <p className="font-medium tracking-more-wider">
                {state.number
                  ? state.number
                  : `• • • •   • • • •   • • • •   • • • •`}
              </p>
            </div>
            <div className="pt-6 pr-6">
              <div className="flex justify-between">
                <div className="">
                  <p className="font-light text-xs">Expiry</p>
                  <p className="font-medium tracking-wider text-sm">
                    {state.expiry ? state.expiry : '04/25'}
                  </p>
                </div>
                <div className="">
                  <p className="font-light text-xs">CVV</p>
                  <p className="font-bold tracking-more-wider text-sm">
                    {state.cvc ? state.cvc : "• • •"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 absolute top-[335px] left-1/2 transform -translate-x-1/2">
        <Input
          state={"default"}
          label={"Name"}
          type={"input"}
          value={state.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          placeholder={"Name"}
          className={"btn-xxs"}
          name={"name"}
        />
        <Input
          state={"default"}
          label={"Card number"}
          type={"number"}
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          placeholder={"Card number"}
          className={"btn-xxs"}
          name={"number"}
        />
        <Input
          state={"default"}
          label={"Expiration date"}
          type={"input"}
          value={state.expiry}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          placeholder={"Expiration date"}
          className={"btn-xxs"}
          name={"expiry"}
        />
        <Input
          state={"default"}
          label={"CVC"}
          type={"number"}
          value={state.cvc}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          placeholder={"CVC"}
          className={"btn-xxs"}
          name={"cvc"}
        />
      </div>
      <Button
        variant={"primary"}
        className={
          "uppercase btn-xs w-[320px] rounded-t-none absolute bottom-0"
        }
        name={"continue"}
        type={"submit"}
      >
        CONTINUE TO CHECKOUT
      </Button>
    </article>
  );
};
