import Head from 'next/head';
import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children, title = 'Feed | LinkedIn' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel='icon' type='image/svg+xml' href='/linkedin.svg' id='favicon-svg'></link>
      </Head>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
