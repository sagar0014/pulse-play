import React, { Fragment } from 'react';

import Head from 'next/head';
import WithLayout from '@components/WithLayout';

import ImportTableView from '@views/Admin/ImportTable';

import Admin from '@layouts/Admin';

const Import = () => {
  return (
    <Fragment>
      <Head>
        <title>Pulse Play | Dashboard</title>
      </Head>
      <WithLayout layout={Admin} component={ImportTableView} />
    </Fragment>
  );
};

export default Import;
