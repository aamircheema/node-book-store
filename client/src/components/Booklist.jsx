import React from 'react';
import SearchBook from './SearchBook';

const Booklist = ({ books }) => {
    return (
        <div>
            <h3>These books are available in our store.</h3>
            <SearchBook books={books} />
            <table>
                <thead>
                    <tr>
                        <th>Book Title</th>
                        <th>Author Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Booklist;
