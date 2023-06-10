import Button from "@/components/button";
import Input from "@/components/input";
import React, { useState } from "react";
import {  handleCardNumberDisplay, handleExpiryDateDisplay, handleNumberInputChange, handleInputFocus, handleTextInputChange } from "@/components/helpers";
import { CreditCard } from "./creditCard";

export const PaymentModal = () => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  return (
    <article className=" bg-grey-dark relative mt-20 pt-[20px] lg:mt-[-40px] h-[650px] w-[320px] rounded-lg">
      <h2 className="text-white text-center text-[20px]">Payment Details</h2>
      <CreditCard state={state}/>
      <div className="flex flex-col gap-3 absolute top-[335px] left-1/2 transform -translate-x-1/2">
        <Input
          state={"default"}
          label={"Name"}
          type={"input"}
          value={state.name}
          onChange={() => handleTextInputChange(event, setState)}
          onFocus={() => handleInputFocus(event, setState)}
          placeholder={"Name"}
          className={"btn-xxs"}
          name={"name"}
        />
        <Input
          state={"default"}
          label={"Card number"}
          type={"number"}
          maxLength={19}
          value={handleCardNumberDisplay(state.number)}
          onChange={() => handleNumberInputChange(event, setState)}
          onFocus={() => handleInputFocus(event, setState)}
          placeholder={"Card number"}
          className={"btn-xxs"}
          name={"number"}
        />
        <Input
          state={"default"}
          label={"Expiration date"}
          type={"input"}
          maxLength={5}
          value={handleExpiryDateDisplay(state.expiry)}
          onChange={() => handleNumberInputChange(event, setState)}
          onFocus={() => handleInputFocus(event, setState)}
          placeholder={"Expiration date"}
          className={"btn-xxs"}
          name={"expiry"}
        />
        <Input
          state={"default"}
          label={"CVC"}
          type={"number"}
          maxLength={3}
          value={state.cvc}
          onChange={() => handleNumberInputChange(event, setState)}
          onFocus={() => handleInputFocus(event, setState)}
          placeholder={"CVC"}
          className={"btn-xxs"}
          name={"cvc"}
        />
      </div>
      <Button
        variant={"primary"}
        className={
          "uppercase btn-xs w-[320px] max-w-[320px] rounded-t-none absolute bottom-0 right-0"
        }
        name={"continue"}
        type={"submit"}
      >
        CONTINUE TO CHECKOUT
      </Button>
    </article>
  );
};
