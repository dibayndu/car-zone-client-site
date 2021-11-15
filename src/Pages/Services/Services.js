import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

import Service from '../SingleService/Service';
import engine from '../../images/engine-treatment.jpg';
import carWash from '../../images/car-wash.png';
import carInsurance from '../../images/car-insurance.png';
const services = [
    {
        name:'Engine Treatment',
        description:'The engine is a critical part of your vehicle, and it requires proper care and maintenance. Most cars break down on the road due to engine problems.connect with customers or supporters.',
        img: engine
    },
    {
        name:'Car Wash',
        description:'Well Experienced Professional for Car Wash and Cleaning.A Prompt and Convenient on time Car Wash Experience.Fast Paced and Convenient Car Cleaning by Using the Best Equipment.',
        img: carWash
    },
    {
        name:'Car Insurance',
        description:'Owners of motor vehicles need to take insurance policy that expires in one year as a non-life policy that costs different amount for different types of vehicles.',
        img: carInsurance
    }

]
const Services = () => {
    return (
        <div>
                <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontWeight: 500, m: 5, color:'success.main' }} variant="h6" component="div">
          OUR SERVICES
        </Typography>
                <Typography sx={{ fontWeight: 600, m: 3 }} variant="h4" component="div">
          Services We Provide
        </Typography>
     <Container>
     <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            services.map(service => <Service
            key ={service.name}
            service={service}
            ></Service>)
        }
      </Grid>
     </Container>
    </Box>
        </div>
    );
};

export default Services;