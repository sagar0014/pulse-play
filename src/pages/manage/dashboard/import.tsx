import React, { Fragment } from 'react';

import Head from 'next/head';
import WithLayout from '@components/WithLayout';

import ImportView from '@views/Admin/Dashboard/Import';

import Admin from '@layouts/Admin';

const ImportPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Pulse Play | Dashboard</title>
      </Head>
      <WithLayout layout={Admin} component={ImportView} />
    </Fragment>
  );
};

export default ImportPage;
