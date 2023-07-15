import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
        <div><hr />
            <form onSubmit={submitForm}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="standard-basic" label="Standard" variant="standard" value={search} onChange={(e) => setSearch(e.target.value)} />
                </Box>
                <input type="submit" name="Search" id="search-submit" />

            </form>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((book) => (
                        <tr key={book.id}>
                            <td>{book.title} </td>
                            <td>{book.author}</td>
                            <td>{book.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <hr />
        </div>
    )
}


export default SearchBook;
