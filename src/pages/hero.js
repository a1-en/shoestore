import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '80vh',
  backgroundImage: 'url(https://source.unsplash.com/featured/?shoes)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  textAlign: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
}));

const Content = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const HeroSection = () => {
  return (
    <HeroContainer>
      <Content>
        <Typography variant="h2" component="div" gutterBottom>
          Welcome to Shoe Store
        </Typography>
        <Typography variant="h5" component="div" gutterBottom>
          Best collection of shoes for everyone
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Sale
        </Button>
      </Content>
    </HeroContainer>
  );
};

export default HeroSection;
