import { useState, MouseEvent } from 'react';
import {
  Grid,
  Card,
  Box,
  CardContent,
  Divider,
  TextField,
  styled,
  IconButton,
  InputAdornment
} from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';

import Logo from 'src/components/LogoSign';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const LogoTextWrapper = styled(Box)(
  ({ theme }) => `
    margin-top: ${theme.spacing(3)};
    padding-left: ${theme.spacing(1)};
  `
);

const LogoText = styled(Box)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(30)};
    font-weight: ${theme.typography.fontWeightBold};
  `
);

function LoginForm() {
  const [isVisible, setVisibility] = useState(false);

  const changePasswordVisibility = () => {
    setVisibility(!isVisible);
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      spacing={3}
    >
      <Grid item xs={11} md={5}>
        <Card>
          <CardContent>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} display="flex" justifyContent="center">
                <LogoTextWrapper>
                  <Logo />
                  <LogoText>Login</LogoText>
                </LogoTextWrapper>
              </Grid>
              <Grid item xs={12}>
                {/* <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' }
                  }}
                  noValidate
                  autoComplete="off"
                > */}
                <div>
                  <TextField
                    fullWidth
                    required
                    id="username"
                    label="Username"
                    placeholder="Enter username..."
                  />
                </div>
                <br />
                <div>
                  <TextField
                    fullWidth
                    required
                    id="password"
                    label="Password"
                    autoComplete="current-password"
                    type={isVisible ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={changePasswordVisibility}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {isVisible ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                </div>
                {/* </Box> */}
              </Grid>
            </Grid>
            <br />
            <br />
            <Divider variant="middle">OR</Divider>
            <br />
            <br />
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default LoginForm;
