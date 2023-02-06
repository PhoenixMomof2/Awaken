// src/context/BookContext.js
import React, { useState, useEffect } from 'react';

// Create context
const BookContext = React.createContext();

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/books')
      .then(res => res.json())
      .then(books => setBooks(books))
    }, []);

  return (
    <BookContext.Provider value={{books}}>
      {children}
    </BookContext.Provider>
  );
}

export { BookContext, BookProvider };