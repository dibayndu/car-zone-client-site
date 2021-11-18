import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, TextField } from '@mui/material';
import useAuth from '../src/Hook/useAuth';

function Product({data}) {
  const {user} = useAuth()
    const {id} =  useParams()
    const [products,setProducts] = useState();
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState('')
    // const [order, setorder] = useState({})
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
    
      const handleOrder = () => {
        const order ={
          name: products.name,
         user: user.displayName,
         email: user.email,
         uid: user.uid,
          number,
          address
        }
        // send to the server

    fetch('https://arcane-springs-99737.herokuapp.com/orders', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(order)
  })
      .then(res => res.json())
      .then(data => {
         console.log("Confirm Order",data); 
      });
      }

    return (
      <div style={{display: "grid", placeItems: "center"}}>
        <Card sx={{ maxWidth: 345 }} style={{marginBottom: "20px" ,display: "grid", placeItems: "center"}}>
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
      <TextField   
          sx={{width:'90%', m:1}}
          id="outlined-size-small"
          name="phone"
          value={number}
          placeholder="Enter your number..."
          defaultValue=""
          size="small"
          onChange={(e) => setNumber(e.target.value)}
          
        />
      <TextField   
          sx={{width:'90%', m:1}}
          id="outlined-size-small"
          name="phone"
          placeholder="Enter your address..."
          defaultValue=""
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          size="small"
        />
        <Button size="small" color="success"
             variant="contained" onClick={() => handleOrder()}>
              Confirm Order
            </Button>
        
    </Card>
      </div>
            
        
    )
}

export default Product
