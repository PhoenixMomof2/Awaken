import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BookItem = () => {
  const { book } = useContext(BookContext)
  return (
    <Card key ={book.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={book.boo_img} />
        <Card.Body>
          <Card.Title>{book.book_name}</Card.Title>
          <Card.Text>
            {book.content}
          </Card.Text>
          <Button variant="primary">Expand</Button>
        </Card.Body>
      </Card>
  )
}

export default BookItem;

