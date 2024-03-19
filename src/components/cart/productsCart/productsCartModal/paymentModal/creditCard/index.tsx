import Image from "next/image";

export const CreditCard = ({state}) => {
  return (
    <article className="w-[340px] absolute right-[-10px] sm:right-3 top-20">
    <div className="w-[340px] h-56 m-auto rounded-xl relative text-white shadow-2xl  transition-transform transform hover:scale-110">
      <Image
        src={"/images/card-bcg.png"}
        alt={"card"}
        layout="fill"
        className="relative object-cover w-full h-full rounded-xl"
      />
      <section className="w-full px-8 absolute top-8">
        <div className="flex justify-between">
          <p className="">{state.name ? state.name : "Name"}</p>
          <Image
            src="/images/mastercard.png"
            alt="mastercard"
            width={60}
            height={40}
            priority
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
          <span className="flex justify-between">
            <>
              <p className="font-light text-xs">Expiry</p>
              <p className="font-medium tracking-wider text-sm">
                {state.expiry ? state.expiry : 'XX/XX'}
              </p>
            </>
            <>
              <p className="font-light text-xs">CVV</p>
              <p className="font-bold tracking-more-wider text-sm">
                {state.cvc ? state.cvc : "• • •"}
              </p>
            </>
          </span>
        </div>
      </section>
    </div>
  </article>
  )
}