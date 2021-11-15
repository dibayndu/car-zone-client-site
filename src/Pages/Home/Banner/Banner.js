import React from 'react';
import audi from '../../../images/audi-a8.png';
import audiBg from '../../../images/blackBg.jpg';
import Grid from '@mui/material/Grid';
import { Button, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';


const bannerBg= {
    background:`url(${audiBg})`,
    backgroundColor: 'rgba(45,58,74,0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 50
}
const verticalCenter ={
    display : 'flex',
    alignItems: 'center',
    height:'500px'
}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid  item style={{ ...verticalCenter,textAlign:'left'}} xs={12} md={5}>
              <Box >
              <Typography variant="h3" style={{color:'white'}}>
                  Get your Dream <br />
                  Starts Here
              </Typography>
              <Typography variant="h6" sx={{fontSize:25, fontWeight:300, color:"gray"}}>
              A8 L <br/>
Starting at $ 86,500
              </Typography>
              <Button variant="contained" style={{ backgroundColor: '#27C38D', marginTop: '20px'}}>Book Your A8</Button>
              </Box>
          </Grid>
          <Grid item xs={12} md={7}>
              <img style={{width:'500px'}}src={audi} alt=""/>
          </Grid>
        </Grid>
      </Container>
    );
};

export default Banner;