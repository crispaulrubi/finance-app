import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitle from 'src/components/PageTitle';
import SubmitButton from '../Common/SubmitButton';

import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider,
  MenuItem,
  Box,
  TextField
} from '@mui/material';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import Footer from 'src/components/Footer';

const tags = [
  {
    value: 'needs',
    label: 'NEEDS'
  },
  {
    value: 'wants',
    label: 'WANTS'
  },
  {
    value: 'savings',
    label: 'SAVINGS'
  }
];

function Forms() {
  const [tag, setTag] = useState('needs');

  const handleChange = (event) => {
    setTag(event.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Create Record</title>
      </Helmet>
      <PageTitleWrapper>
        <PageTitle
          heading="Create New Record"
          subHeading="Create new expense/income/transfer."
          showDocs={false}
        />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Record" />
              <Divider />
              <CardContent>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' }
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      type="number"
                      InputLabelProps={{
                        shrink: true
                      }}
                      required
                      id="amount"
                      label="Amount"
                      defaultValue="0.00"
                    />
                    <TextField required id="datetime" label="Date & Time" />
                    <TextField required id="description" label="Source" />
                    <TextField
                      required
                      id="description"
                      label="Description"
                      placeholder="Record Description..."
                    />
                    <TextField
                      id="outlined-select-currency"
                      select
                      required
                      label="Select Tag"
                      value={tag}
                      onChange={handleChange}
                    >
                      {tags.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <SubmitButton />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Forms;
