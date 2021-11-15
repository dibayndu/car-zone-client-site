import React from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import login from '../../../images/login.jpg';
import useAuth from '../../../Hook/useAuth';

const Register = () => {
    const [loginData,setLoginData]= useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError} = useAuth();
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData ={...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    
        const handleLoginSubmit = e => {
            if(loginData.password !== loginData.password2){
                alert('Your password not match')
                return
            }
            registerUser(loginData.email, loginData.password, loginData.name,history);
             e.preventDefault();
        }
    return (
        <Container>
                <Grid container spacing={2}>
                <Grid item sx={{mt:8}} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Registration</Typography>
                    { !isLoading &&
                        <form onSubmit={handleLoginSubmit}>
                        <TextField 
                        sx={{ width:'75%', m:1}}
                        id="standard-basic" 
                        label="Your Name"
                        name="name"
                        onBlur={handleOnBlur} 
                        variant="standard" />
                        <TextField 
                        sx={{ width:'75%', m:1}}
                        id="standard-basic" 
                        label="Your Email"
                        name="email"
                        type="email"
                        onBlur={handleOnBlur} 
                        variant="standard" />
                        <TextField 
                        sx={{ width:'75%', m:1}}
                        id="standard-basic" 
                        label="passsword"
                        type="password" 
                        name="password"
                        onBlur={handleOnBlur}
                        variant="standard" />
                        <TextField 
                        sx={{ width:'75%', m:1}}
                        id="standard-basic" 
                        label="Re-type passsword"
                        type="password" 
                        name="password2"
                        onBlur={handleOnBlur}
                        variant="standard" />
                       
                        <Button sx={{ width:'75%', m:1}} type="submit" color="success" variant="contained">Register</Button>
                        <NavLink style={{textDecoration:"none"}} to="/login"><Button variant="text">Already Registered? Please Login</Button></NavLink>
                        </form>
                    }
                    {
                        isLoading && <CircularProgress />
                    }
                    {user?.email && <Alert severity="success">You Are Successfully Logged In</Alert>}
                    {authError && <Alert severity="error">Wrong input</Alert>}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{width:"100%"}} src={login} alt=""/>
    
                    </Grid>
                </Grid>
            </Container>
    );
};

export default Register;