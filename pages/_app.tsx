import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import 'react-toastify/dist/ReactToastify.css';
import { AppProps } from 'next/app'
import React from 'react';
import { DefaultSeo } from 'next-seo';
// import your default seo configuration
import SEO from './../next-seo.config';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}