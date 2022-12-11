import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'
import React, {useEffect, useState} from 'react';
import { Layout } from '../components';
import type { AppProps } from 'next/app'
import { format } from 'path'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
