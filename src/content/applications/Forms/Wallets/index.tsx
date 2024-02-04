import { Helmet } from 'react-helmet-async';
import {
  Button,
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Box,
  TextField
} from '@mui/material';

import Footer from 'src/components/Footer';
import PageTitle from 'src/components/PageTitle';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import SubmitButton from '../Common/SubmitButton';

function Forms() {
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
