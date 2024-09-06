// AddBook.jsx
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import BookForm from './BookForm';

function AddBook({ books, setBooks }) {
  const navigate = useNavigate();

  const handleSubmit = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]); 
    navigate('/');
  };  

  return (
    <div>
      <h2>Add Book</h2>
      <BookForm onSubmit={handleSubmit} />
    </div>
  );
}

AddBook.propTypes = {
  books: PropTypes.array.isRequired,
  setBooks: PropTypes.func.isRequired,
};

export default AddBook;
