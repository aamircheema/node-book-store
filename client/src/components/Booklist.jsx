import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from 'react';


const Booklist = ({ books }) => {
    return (
        <div>
            <h3 className='heading'>These books are available in our store.</h3>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Book Title</TableCell>
                            <TableCell align="right">Author Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {books.map((book) => (
                            <TableRow
                                key={book.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {book.title}
                                </TableCell>
                                <TableCell align="right">{book.author}</TableCell>
                                <TableCell align="right">{book.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


        </div>
    );
};

export default Booklist;
