import React, { Fragment } from 'react';

import Head from 'next/head';
import WithLayout from '@components/WithLayout';

import Login from '@components/Auth/Login';
import BlankLayout from '@components/BlankLayout';

const login = () => {
  return (
    <Fragment>
      <Head>
        <title>Pulse Play | Login</title>
      </Head>

      <BlankLayout component={Login} />
    </Fragment>
  );
};

export default login;
