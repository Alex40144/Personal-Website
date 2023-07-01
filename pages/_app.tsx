import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import 'react-toastify/dist/ReactToastify.css';
import { AppProps } from 'next/app'
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}