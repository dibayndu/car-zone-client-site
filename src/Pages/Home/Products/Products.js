import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Grid } from '@mui/material';
import Navigation from '../../Shared/Navigation/Navigation';
import Product from '../../../Product';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products,setProducts] = useState();
    useEffect(() => {    
        fetch('https://arcane-springs-99737.herokuapp.com/products')
        .then(res => res.json())
        .then(data => 
            setProducts(data)
        )
    
    }, [])
    console.log(products);

    const productDetails = (id) => {
        console.log(id);
        <Product id={id}/>
    }
    
    return (
        <Container>
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
           <Button size="small" color="primary" onClick={() => productDetails(item._id)}>
             <Link to={id => `product/${item._id}`}>
                Buy Now
             </Link>
           </Button>
         </CardActions>
       </Card>
  </Grid>
    ))}

  </Grid>
        </Container>
    );
};

export default Products;