import React, { useState } from 'react'

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
                <label htmlFor="search-input">
                    Search book by author name:
                </label>
                <br />
                <input type="text" name="" id="search-input" value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
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
