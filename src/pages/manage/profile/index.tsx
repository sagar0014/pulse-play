import React, { Fragment } from 'react';

import Head from 'next/head';
import WithLayout from '@components/WithLayout';

import ProfileView from '@views/Admin/Profile';
import Admin from '@layouts/Admin';

const ProfilePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Pulse Play | Profile</title>
      </Head>
      <WithLayout layout={Admin} component={ProfileView} />
    </Fragment>
  );
};

export default ProfilePage;
