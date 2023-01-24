import React, { Fragment } from 'react';

import { styled } from '@mui/material/styles';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const DashboardCard = styled('div')(({ theme }) => ({
  background: '#FFFFFF',
  border: '1px solid #DCDFE6',
  borderRadius: '6px',
  padding: '13px 24px',
  minHeight: '376px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  '& > a > button': {
    background: '#5763B1',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '22px',
    letterSpacing: '0.06em',
    borderRadius: '6px',
    color: '#FFFFFF',
    padding: '11px 0',
    width: '100%',
    marginBottom: '11px'
  }
}));

const dashboardItems = [
  {
    id: 1,
    icon: {
      name: 'users.png',
      height: 73,
      width: 115.26
    },
    title: 'Users',
    desc: 'Import user name, number and information for mapping the data'
  },
  {
    id: 2,
    icon: {
      name: 'distributor.png',
      height: 104,
      width: 104
    },
    title: 'Distributors',
    desc: 'Import product details or information for mapping the data'
  },
  {
    id: 3,
    icon: {
      name: 'retailer.png',
      height: 88,
      width: 88
    },
    title: 'Retailers',
    desc: 'Import shop owner name, GST number and location information'
  },
  {
    id: 4,
    icon: {
      name: 'product.png',
      height: 91,
      width: 91
    },
    title: 'Product',
    desc: 'Import product code, name and other details for inventory management'
  },
  {
    id: 5,
    icon: {
      name: 'category.png',
      height: 87,
      width: 87
    },
    title: 'Categories',
    desc: 'Import product category details for mapping the data'
  },
  {
    id: 6,
    icon: {
      name: 'beat.png',
      height: 118,
      width: 103
    },
    title: 'Beats',
    desc: 'Import beat name and area details for mapping the beat data'
  }
];

const DashboardView = () => {
  return (
    <Fragment>
      <Container>
        <Grid container spacing={8}>
          {dashboardItems.map((item) => (
            <Grid item xs={4} key={item?.id}>
              <DashboardCard>
                <Image
                  src={`/assets/dashboard/${item?.icon?.name}`}
                  height={item?.icon?.height}
                  width={item?.icon?.width}
                  alt={item?.icon?.name}
                />
                <Box m={'39px 0 34px 0'}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      fontSize: '22px',
                      lineHeight: '26px',
                      color: '#000',
                      mb: '14px'
                    }}
                  >
                    {item?.title}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 500,
                      fontSize: '16px',
                      lineHeight: '22px',
                      color: '#000'
                    }}
                  >
                    {item?.desc}
                  </Typography>
                </Box>
                <Link
                  href={'/manage/dashboard/import'}
                  style={{ textDecoration: 'none', width: '100%' }}
                >
                  <Button variant="contained">Start an import</Button>
                </Link>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 400,
                    fontSize: '13px',
                    lineHeight: '22px',
                    letterSpacing: '0.06em',
                    color: '#5763B1'
                  }}
                >
                  download sample file
                </Typography>
              </DashboardCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Fragment>
  );
};

export default DashboardView;
