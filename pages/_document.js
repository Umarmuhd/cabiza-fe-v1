import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          {/* <link rel='shortcut icon' href='/icons/logo-white.png' />
          <link
            rel='apple-touch-icon'
            sizes='76x76'
            href='/icons/logo-white.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/icons/logo-white.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/icons/logo-white.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/icons/logo-white.png'
          />
          <link rel='manifest' href='/favicon_io/site.webmanifest' />
          <meta
            name='description'
            content='Squiry is an offshoot of SMARTBUKITES, an online academic platform championing smart education. Like the standard structure of Smartbukites, Squiry thrives on collaborative efforts in helping students overcome their learning challenges. This is done through online courses, tutorials, educational resources, networking channels and so much more!'
          /> */}
        </Head>
        <body className="antialiased">
          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
