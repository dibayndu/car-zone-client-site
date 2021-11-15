import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Grid } from '@mui/material';
import Navigation from '../../Shared/Navigation/Navigation';

const Products = () => {
    const [products,setProducts] = useState();
    useEffect(() => {    
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => 
            setProducts(data)
        )
    
    }, [])
    console.log(products);
    
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
           <Button size="small" color="primary">
             Buy Now
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