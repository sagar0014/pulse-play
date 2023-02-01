import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Import = () => {
  return (
    <Box
      height={'80%'}
      display={'flex'}
      justifyContent={'center'}
      flexDirection={'column'}
      alignItems={'center'}
    >
      <Box
        sx={{
          background: '#FFFFFF',
          border: '1.8px dashed #CFD2D5',
          borderRadius: '10px',
          width: '886px',
          height: '350px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Image
          src={'/assets/dashboard/import.png'}
          height={75}
          width={75}
          alt="import"
        />
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '28px',
            lineHeight: '34px',
            letterSpacing: '0.01em',
            color: '#000000',
            m: '27px 0 19px 0'
          }}
        >
          Select a Excel file to import
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '22px',
            letterSpacing: '0.03em',
            color: '#B9B9B9'
          }}
        >
          or drag and drop it here
        </Typography>
      </Box>
      <Link
        href={'/manage/import/users'}
        passHref
        style={{ textDecoration: 'none' }}
      >
        <Button
          variant="contained"
          sx={{
            width: '235px',
            height: '45px',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '22px',
            textAlign: 'center',
            letterSpacing: '0.06em',
            padding: '11px 0',
            color: '#FFFFFF',
            background: '#5763B1',
            borderRadius: '6px',
            mt: '88px',
            textTransform: 'none'
          }}
        >
          Continue to mapping
        </Button>
      </Link>
    </Box>
  );
};

export default Import;
