import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const AllOrders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const url = `https://arcane-springs-99737.herokuapp.com/orders`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orders])
    console.log(orders)
    const handleUserOrder = id => {
        console.log(id)
        const confirmDelete = window.confirm('Are you sure to delete it?');
        if(confirmDelete) {
            const url = `https://arcane-springs-99737.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount >0) {
                    alert('deleted successfully');
                }
            })
        }
    }
    return (
        <div>
            <h2>My Orders: {orders.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Service</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.user}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                {/* <TableCell align="right">{row.fat}</TableCell> */}
                                <TableCell align="right"><Button onClick={() => handleUserOrder(row._id)}><DeleteForeverIcon /></Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default AllOrders;