'use client'
import React, { useState } from 'react'
import RegisterModal from './register'
import LoginModal from './login'

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

const LoginPage = () => {
  
  const [showLoginModal, setShowLoginModal] = useState<boolean>(true)

  return (
  <>
   {showLoginModal ? <LoginModal externalProviders={externalProviders} setShowLoginModal={setShowLoginModal}/> : <RegisterModal setShowLoginModal={setShowLoginModal}/> }
  </>
  )
}

export default LoginPage;