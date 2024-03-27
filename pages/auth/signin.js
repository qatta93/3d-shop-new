import { getProviders, signIn, getSession , getCsrfToken } from "next-auth/react"
import React, { useState } from 'react'
import LoginModal from '@/components/loginPage/login';
import Image from 'next/image';
import RegisterModal from '@/components/loginPage/register';

const SignIn = ({ providers, csrfToken }) => {
  const [showLoginModal, setShowLoginModal] = useState(true)
  const externalProviders = providers && Object.values(providers).filter(provider => provider.name !== "credentials" || provider.name !== "email");

  return (
    <section className='flex bg-white lg:flex-row flex-col-reverse '>
      <div className='flex flex-1 lg:h-[calc(100vh-40px)] py-10 align-middle justify-center my-auto bg-primary-light bg-[url(/images/bcg-purple.png)] bg-no-repeat bg-[left_0px_right_0px] bg-cover lg:bg-contain'>
        <div className='relative h-[400px] w-[500px] lg:h-[500px] lg:w-[600px] my-auto'>
          <Image src="/images/login-graph.png" alt="login"  layout='fill' className="absolute "/>
        </div>
      </div>
      <div className='flex flex-1 py-10 align-middle justify-center my-auto'>
        {showLoginModal ? <LoginModal setShowLoginModal={setShowLoginModal} csrfToken={csrfToken} externalProviders={externalProviders}/> : <RegisterModal setShowLoginModal={setShowLoginModal}/>}
      </div>
    </section>
  )
}

export default SignIn;

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }

  return {
    props: {
      providers: await getProviders(context),
      csrfToken: await getCsrfToken(context),
    },
  };
}

