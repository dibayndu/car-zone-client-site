import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Product({data}) {
    const {id} =  useParams()
    console.log(id);
    const [products,setProducts] = useState();
    useEffect(() => {    
        fetch('https://arcane-springs-99737.herokuapp.com/products')
        .then(res => res.json())
        .then(data =>{
            const filterItem = data.filter(item => item._id === id)
            console.log(filterItem);
            setProducts(filterItem[0])
        } 
        )
    
    }, [])
    console.log(products);
    return (
            <Card sx={{ maxWidth: 345 }} style={{display: "grid", placeItems: "center"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={products?.picture}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {products?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {products?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        
    )
}

export default Product
