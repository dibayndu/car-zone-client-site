import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { Avatar } from '@mui/material';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Review() {
  const [reviews, setreviews] = React.useState([])

  React.useEffect(() => {    
    fetch('https://arcane-springs-99737.herokuapp.com/reviews')
    .then(res => res.json())
    .then(data => 
        setreviews(data)
    )

}, [])

  return (
      <>
      <h1>Our Reviews</h1>
      <Carousel autoPlay>
          {
              reviews.map(singleReview => (
      <div className="reviews" style={{display: "grid", placeItems: "center", margin: "40px"}}>
          <div className="review">
          <div className="user" style={{display: "flex", alignItems: "center"}}>
              <Avatar />
              <span style={{marginLeft: "10px"}}>{singleReview.user}</span>
          </div>
           <div className="description" style={{textAlign: "left"}}>
                <h4 style={{margin: "2px"}}>{singleReview.car}</h4> 
             </div>
           <div className="description" style={{textAlign: "left"}}>
               Comment: {singleReview.comment}
             </div>
           <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        readOnly
        value={singleReview.rating}
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </Box>
      </div>
      </div>
              ))
          }

      
      </Carousel>
      </>
      
   
  );
}
