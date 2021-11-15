import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';


const TimeSlot = ({timeSlot, date, setBookingSuccess}) => {
    const { name, time, space}= timeSlot;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
       <>
        <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{py:5}}>
            <Typography sx={{ color: 'success.main', fontWeight:600}} variant="h5" gutterBottom component="div">
                {name}
            </Typography>
            <Typography variant="h8" gutterBottom component="div">
                {time}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                {space} Spaces Are Available
            </Typography>
            <Button onClick={handleBookingOpen} variant="contained" color="success">GET YOUR SERVICE</Button>
            </Paper>
        </Grid>
        <BookingModal
        date={date}
        timeSlot={timeSlot}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
        setBookingSuccess = {setBookingSuccess}
        ></BookingModal>
       </>
    );
};

export default TimeSlot;