import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Booklist from './components/Booklist';
import AddBook from './components/AddBook';
import SearchBook from './components/SearchBook';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Container } from '@mui/material';

function App() {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  useEffect(() => {
    fetch('http://localhost:3001/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <Router>
      <Navbar />
      <Container maxWidth='lg'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stock" element={<Booklist books={books} />} />
          <Route path="/addBook" element={<AddBook onAddBook={addBook} />} />
          <Route path="/search" element={<SearchBook books={books} />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
