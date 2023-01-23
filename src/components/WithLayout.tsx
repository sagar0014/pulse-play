import React from 'react';

interface Props {
  component: React.FC;
  layout: any;
}

const WithLayout = (props: Props) => {
  const { layout: Layout, component: Component } = props;

  return (
    <Layout>
      <Component />
    </Layout>
  );
};

export default WithLayout;
