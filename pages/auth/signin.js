// import { EmailForm } from "@/components/EmailForm";
import { getProviders, signIn, getSession , getCsrfToken } from "next-auth/react"
// import { Navigation } from '@/components/Navigation';
// import Image from 'next/image'
// import Link from 'next/link'

const SignIn = ({ providers, csrfToken }) => {

  const externalProviders = Object.values(providers).filter(provider => provider.name !== "credentials" || provider.name !== "email");

  return (
    <>

    </>
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

