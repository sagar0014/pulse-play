import React, { Fragment } from 'react';

import { Box, Breadcrumbs, Container, Typography } from '@mui/material';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from '@mui/material/Link';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {},
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));

function createData(id: number, name: string) {
  return { id, name };
}

const rows = [
  createData(1, 'Name'),
  createData(2, 'Address'),
  createData(3, 'Code'),
  createData(4, 'Mobile')
];

const rows1 = [
  createData(1, 'Date of birth'),
  createData(2, 'Gender'),
  createData(3, 'Spent Amount'),
  createData(4, 'Other Details')
];

const ImportTableView = () => {
  return (
    <Fragment>
      <Container maxWidth={'xl'}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="large" />}
          aria-label="breadcrumb"
        >
          <Link style={{ textDecoration: 'none' }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: '28px',
                lineHeight: '34px',
                color: '#4B5667'
              }}
            >
              Import
            </Typography>
          </Link>
          <Link style={{ textDecoration: 'none' }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: '28px',
                lineHeight: '34px',
                color: '#4B5667'
              }}
            >
              Users
            </Typography>
          </Link>
        </Breadcrumbs>

        <Box>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '29px',
              color: '#4A5569',
              marginBottom: '10px',
              marginTop: '80px'
            }}
          >
            Mandatory
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell
                    sx={{ backgroundColor: '#F0F0F0' }}
                  ></StyledTableCell>

                  <StyledTableCell
                    sx={{ backgroundColor: '#F0F0F0', color: '#111' }}
                  >
                    Users
                  </StyledTableCell>
                  <StyledTableCell align="center">User Details</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      sx={{ backgroundColor: '#F0F0F0', width: '60px' }}
                    >
                      {row.id}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right"></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '29px',
              color: '#4A5569',
              marginBottom: '10px',
              marginTop: '80px'
            }}
          >
            Optional
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell
                    sx={{ backgroundColor: '#F0F0F0' }}
                  ></StyledTableCell>

                  <StyledTableCell
                    sx={{ backgroundColor: '#F0F0F0', color: '#111' }}
                  >
                    Users
                  </StyledTableCell>
                  <StyledTableCell align="center">User Details</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows1.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      sx={{ backgroundColor: '#F0F0F0', width: '60px' }}
                    >
                      {row.id}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right"></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </Fragment>
  );
};

export default ImportTableView;
