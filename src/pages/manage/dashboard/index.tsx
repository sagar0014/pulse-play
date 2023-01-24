import React, { Fragment } from 'react';

import Head from 'next/head';
import WithLayout from '@components/WithLayout';

import DashboardView from '@views/Admin/Dashboard';

import Admin from '@layouts/Admin';

const DashboardPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Pulse Play | Dashboard</title>
      </Head>
      <WithLayout layout={Admin} component={DashboardView} />
    </Fragment>
  );
};

export default DashboardPage;
