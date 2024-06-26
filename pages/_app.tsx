import '../styles/globals.css'
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '../src/components/Layout'
import { SessionProvider } from "next-auth/react"
import { Provider } from "../context/AppContext";

function MyApp({  Component, pageProps: { session, ...pageProps }}: AppProps) {  
  
  return (
    <>
      <Head>
        <title>Shopily</title>
        <meta name="description" content="Find your perfect furniture" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionProvider session={session}>
        <Provider>
          <Layout>
            <Component {...pageProps}/>
          </Layout>
        </Provider>
      </SessionProvider>
    </>
  )
}

export default MyApp;
