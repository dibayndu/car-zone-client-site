import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import TimeSlot from '../TimeSlot/TimeSlot';


const timeSlots =[
    {
        id:1,
        name:'Free trial',
        time:'08.00AM -09.00AM',
        space:10,
    },
    {
        id:2,
        name:'Car Wash',
        time:'08.00AM -05.00PM',
        space:20,
    },
    {
        id:3,
        name:'Car Insurance Service',
        time:'08.00AM -06.00PM',
        space:'available',
    },
    {
        id:4,
        name:'Engine Treatment',
        time:'08.00AM -09.00PM',
        space:10,
    },
    {
        id:5,
        name:'Membership',
        time:'08.00AM -09.00AM',
        space:1000,
    },
    {
        id:6,
        name:'Car Modify Servicea',
        time:'08.00AM -09.00AM',
        space:10,
    }

]

const AvailableBooking = ({date}) => {
    const [bookingSuccess,setBookingSuccess] = useState(false);
    return (
        <Container>
           <Typography variant="h4" sx={{ color: 'success.main', mb:3}}>Your Services available on: {date.toDateString()}</Typography>
           { bookingSuccess && <Alert severity="success">You Are Successfully Book your Slot</Alert>}

           <Grid container spacing={2}>
               {
                   timeSlots.map(timeSlot => <TimeSlot
                   key={timeSlot.id}
                   timeSlot={timeSlot}
                   date={date}
                   setBookingSuccess ={setBookingSuccess}
                   >

                   </TimeSlot>)
               }
               </Grid> 
        </Container>
    );
};

export default AvailableBooking;