import React, { useState } from 'react';
import { TextField, Button } from '@mui/material/';

const AddBook = ({ onAddBook }) => {
    const [title, setBookTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        const book = { title, author, price };
        onAddBook(book);
        setBookTitle('');
        setAuthor('');
        setPrice('');
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center', color: "green" }}>Add Book</h1>

            <form onSubmit={submitForm} style={{ textAlign: 'center' }}>
                <TextField
                    type='text'
                    label="Enter title"
                    variant="outlined"
                    value={title}
                    onChange={(e) => setBookTitle(e.target.value)}
                    required
                />
                <br /><br />
                <TextField
                    type='text'
                    label="Enter author"
                    variant="outlined"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
                <br />
                <br />
                <TextField
                    type='number'
                    label="Enter price"
                    variant="outlined"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <br />
                <br />
                <Button type="submit" variant="outlined">
                    Add Book
                </Button>
            </form>
        </div>
    );
};

export default AddBook;
