import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import Container from 'react-bootstrap/Container';
import BookItem from './BookItem';

const BookList = () => {

  const {books} = useContext(BookContext)
  // const book = {
  //   book_name: book_name,
  //   book_img: book_img,
  //   author: author,
  //   stars: stars,
  //   category: category,
  //   content: content
  // }

  return (
    <Container>
      {books.map((book) => <BookItem key={book.id}/>)}
    </Container>
  )
}

export default BookList;