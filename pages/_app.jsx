import React, { useState } from "react";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

import { ReactQueryDevtools } from "react-query/devtools";

import "@/styles/globals.css";
import "@/styles/index.css";

import { AuthProvider } from "@/context/AuthContext";
import { NavProvider } from "@/context/NavContext";

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <AuthProvider>
            <NavProvider>
              <React.Fragment>
                <Head>
                  <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1,0, shrink-to-fit=no"
                  />
                  <title>Cabiza</title>
                </Head>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </React.Fragment>
            </NavProvider>
          </AuthProvider>
        </RecoilRoot>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
