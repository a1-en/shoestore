import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Instagram } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#088F8F',
  color: '#fff',
  padding: theme.spacing(4),
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
}));

const FooterContent = styled(Box)(({ theme }) => ({
  flex: '1 0 300px',
  padding: theme.spacing(2),
}));

const FooterIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(4),
  marginTop: theme.spacing(2),
}));

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Typography variant="h5" gutterBottom>
          Get Help
        </Typography>
        <Typography variant="body1" gutterBottom>
          Email: <Link href="mailto:example@example.com" color="inherit">example@example.com</Link>
        </Typography>
        <Typography variant="body1" gutterBottom>
          Phone: <Link href="tel:+1234567890" color="inherit">+1 (234) 567-890</Link>
        </Typography>
      </FooterContent>
      <FooterContent>
        <FooterIcons>
          <IconButton href="#" target="_blank" rel="noopener" aria-label="Facebook" color="inherit">
            <Facebook />
          </IconButton>
          <IconButton href="#" target="_blank" rel="noopener" aria-label="Instagram" color="inherit">
            <Instagram />
          </IconButton>
        </FooterIcons>
      </FooterContent>
      <FooterContent>
        <Typography variant="h5" gutterBottom>
          Information
        </Typography>
        <Typography variant="body1" gutterBottom>
          Your company information goes here.
        </Typography>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
