import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function BookList({ books, setBooks }) {
  const deleteBook = (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      setBooks(books.filter(book => book.id !== id));
    }
  };

  return (
    <div>
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available.</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              {book.title} by {book.author}
              <Link to={`/edit/${book.id}`}>Edit</Link>
              <button onClick={() => deleteBook(book.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Add prop types for validation
BookList.propTypes = {
  books: PropTypes.array.isRequired,
  setBooks: PropTypes.func.isRequired,
};

export default BookList;
