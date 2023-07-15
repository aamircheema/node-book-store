import React, { useState, useEffect } from 'react';
import Booklist from './components/Booklist';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);
  //console.log(books);
  return (
    <div>
      <h1>Book Store</h1>
      <Booklist books={books} />

    </div>
  );
}

export default App;
