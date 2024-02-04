import { Box, Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { styled } from '@mui/material/styles';
import LoginForm from './LoginForm';

const OverviewWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);

function Login() {
  // test commit
  return (
    <OverviewWrapper>
      <Helmet>
        <title>Personal Finance App</title>
      </Helmet>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" py={5} alignItems="center">
          <LoginForm />
        </Box>
      </Container>
    </OverviewWrapper>
  );
}

export default Login;
