import React, { useContext } from "react";
import { BookContext, BookProvider } from "../../context/BookContext";
import Container from "react-bootstrap/Container";
import BookItem from "../../components/books/BookItem";

const BookList = () => {
  const { books } = useContext(BookContext);
  // const book = {
  //   book_name: book_name,
  //   book_img: book_img,
  //   author: author,
  //   stars: stars,
  //   category: category,
  //   content: content
  // }

  return (
    <BookProvider>
      <Container>
        {books.map((book) => (
          <BookItem key={book.id} />
        ))}
      </Container>
    </BookProvider>
  );
};

export default BookList;
