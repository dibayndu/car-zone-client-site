import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import technician from '../../../images/technician.png';
import bg from '../../../images/bg.jpg';
import { Button, Container, Typography } from '@mui/material';


const bookingBg={
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74,0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}
const BookingBanner = () => {
    return (
      <Container>
            <Box style={bookingBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
            style={{width:400}}
            src={technician} alt=""/>
          </Grid>
          <Grid item xs={12} md={4} sx={{ 
              display:'flex',
              justifyContent:'flex-start',
              textAlign:'left'
              }}>
             <Box>
             <Typography variant="h1" style={{ color: '#5CE7ED', marginBottom:'20px'}}>
                 Hire Us!
                 </Typography>
             <Typography variant="h4" style={{ color: 'white'}}>
                 Get Your Service Today
                 </Typography>
                 <Typography variant="h6" style={{ color: 'white',fontSize: 14,fontWeight:'300px',marginTop: '10px'}}>
                     Make sure your services faster,get online solution,free assesment for lifetime membership.
                 </Typography>
                 <Button variant="contained" style={{ backgroundColor: '#27C38D', marginTop: '20px'}}>Learn More</Button>
             </Box>
          </Grid>
          </Grid>
      </Box>
      </Container>
    );
};

export default BookingBanner;