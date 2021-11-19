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

const ProductManagement = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const url = `https://arcane-springs-99737.herokuapp.com/products`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products])
    const handleUserOrder = id => {
        console.log(id)
        const confirmDelete = window.confirm('Are you sure to delete it?');
        if(confirmDelete) {
            const url = `https://arcane-springs-99737.herokuapp.com/products/${id}`;
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
                        {products.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                   <img style={{width: "200px", height: "200px"}} src= {row.picture} alt="" />
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                
                                <TableCell align="right"><Button onClick={() => handleUserOrder(row._id)}><DeleteForeverIcon /></Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ProductManagement;