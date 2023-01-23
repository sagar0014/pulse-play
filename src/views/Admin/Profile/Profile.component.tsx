import {
  Box,
  Card,
  CardHeader,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material';
import React, { forwardRef } from 'react';
import CardContent from '@mui/material/CardContent';

// @ts-ignore
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const CustomInput = forwardRef((props, ref) => {
  return (
    <TextField
      fullWidth
      {...props}
      inputRef={ref}
      label="Birth Date"
      autoComplete="off"
    />
  );
});

const ProfileView = () => {
  const [date, setDate] = React.useState<Date | null | undefined>(null);

  return (
    <Container>
      <Card sx={{ mt: '80px' }}>
        <CardHeader
          title="Profile Details"
          titleTypographyProps={{ variant: 'h6' }}
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                placeholder="First Name..."
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                placeholder="Last Name..."
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="form-layouts-separator-select-label">
                  Country
                </InputLabel>
                <Select
                  label="Country"
                  defaultValue=""
                  id="form-layouts-separator-select"
                  labelId="form-layouts-separator-select-label"
                >
                  <MenuItem value="UK">UK</MenuItem>
                  <MenuItem value="USA">USA</MenuItem>
                  <MenuItem value="Australia">Australia</MenuItem>
                  <MenuItem value="Germany">Germany</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePicker
                selected={date}
                showYearDropdown
                showMonthDropdown
                placeholderText="MM-DD-YYYY"
                customInput={<CustomInput />}
                id="form-layouts-separator-date"
                onChange={(date: Date) => setDate(date)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone No."
                placeholder="+1-123-456-8790"
              />
            </Grid>
          </Grid>
          <Divider sx={{ margin: 0 }} />
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProfileView;
