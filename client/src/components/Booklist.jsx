import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



const Booklist = ({ books, deleteBook }) => {
    const handleDeleteBook = (id) => {
        deleteBook(id);
    };



    return (
        <div>
            <h1 style={{ textAlign: 'center', color: "green" }}>These books are available.</h1>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Book Title</StyledTableCell>
                            <StyledTableCell align="right">Author Name</StyledTableCell>
                            <StyledTableCell align="right">Price</StyledTableCell>
                            <StyledTableCell align="right">

                                Delete Book
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {books.map((book) => (
                            <StyledTableRow key={book.id}>
                                <StyledTableCell component="th" scope="row">{book.title}</StyledTableCell>
                                <StyledTableCell align="right">{book.author}</StyledTableCell>
                                <StyledTableCell align="right">{book.price}</StyledTableCell>
                                <StyledTableCell align="right"><Button size='small' onClick={() => handleDeleteBook(book.id)}>

                                    Delete
                                </Button></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
};

export default Booklist;
