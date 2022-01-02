import React from "react";
import Head from "next/head";
import "../styles/globals.css";

import "../styles/index.css";

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    // <AuthProvider>
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Cabiza</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
    // </AuthProvider>
  );
}
