import { Button, TextField, Alert } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hook/useAuth';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { user } = useAuth();
    const uid = user.uid;
    const token = user.accessToken;
    console.log(uid);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        console.log(user);
        fetch('https://arcane-springs-99737.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({uid,user})
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <h2>Be An Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Hello Admin!</Alert>}
        </div>
    );
};

export default MakeAdmin;