import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Services from '../../Services/Services';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import BookingBanner from '../BookingBanner/BookingBanner';
import Products from '../Products/Products';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import './Home.css'
import Product from '../../../Product';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products,setProducts] = useState();
  useEffect(() => {    
      fetch('https://arcane-springs-99737.herokuapp.com/products')
      .then(res => res.json())
      .then(data => 
          setProducts(data.slice(0,6))
      )
  
  }, [])
  console.log(products);

  const productDetails = (id) => {
      console.log(id);
      <Product id={id}/>
  }
    return (
        <Container>
             <Banner></Banner>
                <h1>Our Products</h1>
                    <Grid sx={{p:3}} container spacing={2}>
                    {products?.map(item => (
                <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.picture}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price:{item.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="success" onClick={() => productDetails(item._id)
            } variant="contained">
              <Link style={{textDecoration:"none", color:"white"}} to={id => `product/${item._id}`}>
                  Buy Now
              </Link>
              
            </Button>
                </CardActions>
              </Card>
          </Grid>
            ))}
            </Grid>
           
            
            <Services></Services>
            <BookingBanner></BookingBanner>
            
        
        </Container>
    );
};

export default Home;