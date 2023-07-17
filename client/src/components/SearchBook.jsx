import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const searchByAuthor = (books, author) => {
    const filteredBook = books.filter(book => book.author.toLowerCase() === author.toLowerCase());
    return filteredBook;
}

const SearchBook = ({ books }) => {
    const [search, setSearch] = useState('');
    const [result, setResult] = useState([]);
    const submitForm = (e) => {
        e.preventDefault();
        const filteredBook = searchByAuthor(books, search);
        if (filteredBook.length > 0) {
            setResult(filteredBook);
        } else {
            alert(`${search}'s books are not available`)
        };

    }

    return (
        <>
            <div>
                <h1 style={{ textAlign: 'center', color: "green" }}>Search Book</h1>
            </div>
            <div>
                <form onSubmit={submitForm}>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="standard-basic" label="Search book by author name" variant="standard" value={search} onChange={(e) => setSearch(e.target.value)} />
                    </Box>
                    <br />
                    <Button
                        variant="outlined"
                        size="small"
                        type="submit"
                        name="Search"
                        id="search-submit"
                        color="secondary"

                    >
                        Search
                    </Button>

                </form>
            </div>
            <br />
            <div>
                <h1 style={{ textAlign: 'center', color: 'green' }}>Search Result</h1>
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
                            {result.map((book) => (
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

            </div >
        </>
    )
}


export default SearchBook;
