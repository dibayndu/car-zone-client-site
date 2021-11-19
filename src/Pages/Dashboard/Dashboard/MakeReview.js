import { Button, Card, CardContent, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import useAuth from '../../../Hook/useAuth';
import Star from '@mui/icons-material/Star';

const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75"
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47"
    }
  });

const MakeReview = (props) => {
    const {user} = useAuth();
    const {uid} = user;
    const [orders, setOrders] = useState([]);
    const [car, setcar] = useState('');    
    useEffect(() => {
        fetch(`https://arcane-springs-99737.herokuapp.com/orders/${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    // console.log(orders);
    return (
        <div>
           <div>
               {car && <AddReview car={car}/>}
           {
               orders?.map(item => (
                   <>
                    <Container key={item._id} style={{ display:"flex", alignItems: "center", justifyContent: "space-evenly", marginTop: "20px", textAlign:"-webkit-center" }}>
                        <Card sx={{ maxWidth: 345 }}>
                                <CardContent>
                                <Typography gutterBottom component="div">
                                    Product Name: {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                User: {item.user}
                                </Typography>
                                </CardContent>
                        </Card>   
                        
                        <Button onClick={() => setcar(item.name)} variant="contained">Post Review</Button>
                    </Container>
                   </>
               ))

           }
           </div>
           
        </div>
    );
};

const AddReview = ({car}) => {
    const {user} = useAuth();
    const [rating, setRating] = useState(3);
    const [comment, setComment] = useState('');
    const history = useHistory();
    const postReview = () => {
        const review = {user: user.displayName, car, comment, rating}
        console.log(review)
        fetch('https://arcane-springs-99737.herokuapp.com/postreview',{
        method:"POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(review)
        })
        .then(res=> res.json())
        .catch(err => console.log(err));
        alert('Succesfully review given.');
        history.push('/home');

    }
    

    return(
        <>
        <h6>{car}</h6>
        <TextareaAutosize
                            value={comment}
                            onChange={(e) => setComment(e.target.value) }
                            aria-label="minimum height"
                            minRows={6}
                            placeholder="Enter Your Review"
                            style={{ width: "40%" }}
                            />
                            <Box
                            sx={{
                                "& > legend": { mt: 2 }
                            }}
                            >
                            <Typography component="legend">Rating: </Typography>
                            <Rating
                                name="hover-feedback"
                                defaultValue={rating}
                                onChange={(e) => setRating(e.target.value)}
                                getLabelText={(value) => 
                                    `${value} Heart${value !== 1 ? "s" : ""}`
                                }
                                precision={0.5}
                                icon={<Star fontSize="inherit" />}
                                emptyIcon={<Star fontSize="inherit" />}
                            />
                            </Box>
                            <Button sx={{m:1}} variant="contained" onClick={() => postReview()}>Post Review</Button>
                            </>
    )
                            }
export default MakeReview;