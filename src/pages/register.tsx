import React, { Fragment } from 'react';

import Head from 'next/head';

import Register from '@components/Auth/Register';
import BlankLayout from '@components/BlankLayout';

const login = () => {
  return (
    <Fragment>
      <Head>
        <title>Pulse Play | Register</title>
      </Head>

      <BlankLayout component={Register} />
    </Fragment>
  );
};

export default login;
