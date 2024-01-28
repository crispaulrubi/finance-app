import { NavLink } from 'react-router-dom';
import {
  Card,
  Grid,
  CardContent,
  Avatar,
  Tooltip,
  CardActionArea,
  styled
} from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

import CardTemplate from './CardTemplate';

const AvatarAddWrapper = styled(Avatar)(
  ({ theme }) => `
            background: ${theme.colors.alpha.black[10]};
            color: ${theme.colors.primary.main};
            width: ${theme.spacing(8)};
            height: ${theme.spacing(8)};
    `
);

const CardAddAction = styled(Card)(
  ({ theme }) => `
            border: ${theme.colors.primary.main} dashed 1px;
            height: 100%;
            color: ${theme.colors.primary.main};
            transition: ${theme.transitions.create(['all'])};
            
            .MuiCardActionArea-root {
              height: 100%;
              justify-content: center;
              align-items: center;
              display: flex;
            }
            
            .MuiTouchRipple-root {
              opacity: .2;
            }
            
            &:hover {
              border-color: ${theme.colors.alpha.black[70]};
            }
    `
);

function Wallets() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3} item>
          <CardTemplate
            alt="BTC"
            src="/static/images/placeholders/logo/bitcoin.png"
            name="Bitcoin"
            subtitle="BTC"
            cryptoAmount="1.25843 BTC"
            fiatAmount="$3,586.22"
          />
        </Grid>
        <Grid xs={12} sm={6} md={3} item>
          <CardTemplate
            alt="Ripple"
            src="/static/images/placeholders/logo/ripple.png"
            name="Ripple"
            subtitle="XRP"
            cryptoAmount="5,783 XRP"
            fiatAmount="$586.83"
          />
        </Grid>
        <Grid xs={12} sm={6} md={3} item>
          <CardTemplate
            alt="Cardano"
            src="/static/images/placeholders/logo/cardano.png"
            name="Cardano"
            subtitle="ADA"
            cryptoAmount="34,985 ADA"
            fiatAmount="$54,985.00"
          />
        </Grid>
        <Grid xs={12} sm={6} md={3} item>
          <Tooltip arrow title="Click to add a new wallet">
            <CardAddAction>
              <CardActionArea
                component={NavLink}
                to="/management/wallets/create"
                sx={{
                  px: 1
                }}
              >
                <CardContent>
                  <AvatarAddWrapper>
                    <AddTwoToneIcon fontSize="large" />
                  </AvatarAddWrapper>
                </CardContent>
              </CardActionArea>
            </CardAddAction>
          </Tooltip>
        </Grid>
      </Grid>
    </>
  );
}

export default Wallets;
