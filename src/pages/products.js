import React, { useState } from 'react';
import Slider from 'react-slick';
import { Box, Button, Card, CardContent, CardMedia, Typography, CardActions } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from '../../src/images/shoepic.jpg'
import image2 from '../../src/images/shoepic2.jpg'

const products = [
  { id: 1, name: 'Men\'s Shoe 1', category: 'Men', price: '$100', image: image },
  { id: 2, name: 'Women\'s Shoe 1', category: 'Women', price: '$120', image: image2 },
  { id: 3, name: 'Men\'s Shoe 2', category: 'Men', price: '$90', image: image },
  { id: 4, name: 'Women\'s Shoe 2', category: 'Women', price: '$150', image: image2 },
  // Add more products as needed
];

const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
}));

const FilterButtons = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 300,
  margin: 'auto',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[6],
  },
}));

const ProductImage = styled(CardMedia)(({ theme }) => ({
  height: 200,
  objectFit: 'cover',
}));

const ProductCardContent = styled(CardContent)(({ theme }) => ({
  textAlign: 'left',
}));

const ProductCardActions = styled(CardActions)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const CustomButton = styled(Button)(({ theme, selected }) => ({
  color: selected ? '#fff' : theme.palette.text.primary,
  backgroundColor: selected ? '#088F8F' : theme.palette.background.default,
  '&:hover': {
    backgroundColor: selected ? '#066a6a' : alpha('#088F8F', 0.1),
  },
}));

const ProductsSection = () => {
  const [filter, setFilter] = useState('All');

  const filteredProducts = filter === 'All' ? products : products.filter(product => product.category === filter);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Container>
      <Typography variant="h4" component="div" gutterBottom>
        Our Products
      </Typography>
      <FilterButtons>
        <CustomButton variant="contained" selected={filter === 'All'} onClick={() => setFilter('All')}>
          All
        </CustomButton>
        <CustomButton variant="contained" selected={filter === 'Men'} onClick={() => setFilter('Men')}>
          Men
        </CustomButton>
        <CustomButton variant="contained" selected={filter === 'Women'} onClick={() => setFilter('Women')}>
          Women
        </CustomButton>
      </FilterButtons>
      <Slider {...settings}>
        {filteredProducts.map(product => (
          <StyledCard key={product.id}>
            <ProductImage
              component="img"
              image={product.image}
              alt={product.name}
            />
            <ProductCardContent>
              <Typography variant="h6" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.price}
              </Typography>
            </ProductCardContent>
            <ProductCardActions>
              <Button size="small" color="primary">Add to Cart</Button>
              <Button size="small" color="secondary">Learn More</Button>
            </ProductCardActions>
          </StyledCard>
        ))}
      </Slider>
    </Container>
  );
};

export default ProductsSection;
