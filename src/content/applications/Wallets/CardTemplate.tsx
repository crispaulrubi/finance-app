import { useState } from 'react';
import {
  Card,
  Box,
  CardContent,
  Typography,
  Avatar,
  alpha,
  styled
} from '@mui/material';

interface CardTemplateProps {
  alt?: string;
  src?: string;
  name?: string;
  subtitle?: string;
  cryptoAmount?: string;
  fiatAmount?: string;
}

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
        margin: ${theme.spacing(2, 0, 1, -0.5)};
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: ${theme.spacing(1)};
        padding: ${theme.spacing(0.5)};
        border-radius: 60px;
        height: ${theme.spacing(5.5)};
        width: ${theme.spacing(5.5)};
        background: ${
          theme.palette.mode === 'dark'
            ? theme.colors.alpha.trueWhite[30]
            : alpha(theme.colors.alpha.black[100], 0.07)
        };
      
        img {
          background: ${theme.colors.alpha.trueWhite[100]};
          padding: ${theme.spacing(0.5)};
          display: block;
          border-radius: inherit;
          height: ${theme.spacing(4.5)};
          width: ${theme.spacing(4.5)};
        }
    `
);

function CardTemplate({
  alt = '',
  src = '',
  name = '',
  subtitle = '',
  cryptoAmount = '',
  fiatAmount = ''
}: CardTemplateProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transition: 'transform 0.3s ease',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        cursor: 'pointer',
        maxWidth: 300
      }}
      sx={{
        px: 1
      }}
    >
      <CardContent>
        <AvatarWrapper>
          <img alt={alt} src={src} />
        </AvatarWrapper>
        <Typography variant="h5" noWrap>
          {name.toUpperCase()}
        </Typography>
        <Typography variant="subtitle1" noWrap>
          {subtitle}
        </Typography>
        <Box
          sx={{
            pt: 3
          }}
        >
          <Typography variant="h3" gutterBottom noWrap>
            {cryptoAmount}
          </Typography>
          <Typography variant="subtitle2" noWrap>
            {fiatAmount}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CardTemplate;
