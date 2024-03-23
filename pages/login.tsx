import { useState } from "react";
import LoginModal from '@/components/login';
import Image from 'next/image';
import RegisterModal from '@/components/register';

const SignIn = () => {
  const [showLoginModal, setShowLoginModal] = useState(true)

  const externalProviders = [
    {
      id: 'github',
      name: 'GitHub',
      type: 'oauth',
      signinUrl: 'http://localhost:3000/api/auth/signin/github',
      callbackUrl: 'http://localhost:3000/api/auth/callback/github'
    },
    {
      id: 'google',
      name: 'Google',
      type: 'oauth',
      signinUrl: 'http://localhost:3000/api/auth/signin/google',
      callbackUrl: 'http://localhost:3000/api/auth/callback/google'
    },
  ]

  return (
    <section className='flex bg-white lg:flex-row flex-col-reverse '>
      <div className='flex flex-1 lg:h-[100vh] py-10 align-middle justify-center my-auto bg-primary-light bg-[url(/images/bcg-purple.png)] bg-no-repeat bg-[left_0px_right_0px] bg-cover lg:bg-contain'>
        <div className='relative h-[400px] w-[500px] lg:h-[500px] lg:w-[600px] my-auto'>
          <Image src="/images/login-graph.png" alt="login"  layout='fill' className="absolute "/>
        </div>
      </div>
      <div className='flex flex-1 py-10 align-middle justify-center my-auto'>
        {showLoginModal ? <LoginModal setShowLoginModal={setShowLoginModal} externalProviders={externalProviders}/> : <RegisterModal setShowLoginModal={setShowLoginModal}/>}
      </div>
    </section>
  )
}

export default SignIn;