import { Container, Grid } from '@mui/material';
import React from 'react';
import Service from '../../../images/carService.png';
import Calender from '../../Shared/Calender/Calender';

const BookingHeader = ({date, setDate}) => {
    return (
        <div>
            <Container>
              <Grid container spacing ={2}>
                  <Grid item xs={12} md={6}>
                      <Calender date={date} setDate={setDate}></Calender>
                      </Grid>
                  <Grid item xs={12} md={6}>
                      <img style={{ height: "50vh", width: "50vh" }} src={Service} alt=""/>

                      </Grid>
                  </Grid>  
            </Container>
        </div>
    );
};

export default BookingHeader;