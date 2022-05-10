import React from 'react';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import { RecoilRoot } from 'recoil';

import '@/styles/globals.css';
import '@/styles/index.css';

import { AuthProvider } from '@/context/AuthContext';
import { NavProvider } from '@/context/NavContext';

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    <RecoilRoot>
      <AuthProvider>
        <NavProvider>
          <React.Fragment>
            <Head>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
              />
              <title>Cabiza</title>
            </Head>
            <Toaster />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </React.Fragment>
        </NavProvider>
      </AuthProvider>
    </RecoilRoot>
  );
}
