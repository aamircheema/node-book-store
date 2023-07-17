import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { TextField, Button } from '@mui/material/';

const AddBook = ({ books, onAddBook }) => {
    const [id, setId] = useState('');
    const [bookTitle, setBookTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        const book = { id, bookTitle, author, price };
        onAddBook(book);
        setId('');
        setBookTitle('');
        setAuthor('');
        setPrice('');
    };

    return (
        <div>

            <h1 style={{ textAlign: 'center', color: "green" }}>Add Book</h1>
            <hr />
            <form onSubmit={submitForm}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        type='number'
                        id="outlined-basic"
                        label="Enter id"
                        variant="outlined"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        required
                    />
                    <TextField
                        type='text'
                        id="outlined-basic"
                        label="Enter title"
                        variant="outlined"
                        value={bookTitle}
                        onChange={(e) => setBookTitle(e.target.value)}
                        required
                    />
                    <TextField
                        type='text'
                        id="outlined-basic"
                        label="Enter author"
                        variant="outlined"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                    <TextField
                        type='number'
                        id="outlined-basic"
                        label="Enter price"
                        variant="outlined"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </Box>
                <hr />
                <Button type="submit" size="small" variant="outlined" onClick={submitForm}>
                    Submit Form
                </Button>

            </form>
        </div>
    );
};

export default AddBook;
