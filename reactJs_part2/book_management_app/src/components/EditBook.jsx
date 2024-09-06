import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import BookForm from './BookForm';

function EditBook({ books, setBooks }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find(b => b.id === parseInt(id, 10)); 

  const handleSubmit = (updatedBook) => {
    setBooks(books.map(b => (b.id === parseInt(id, 10) ? updatedBook : b)));
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Book</h2>
      <BookForm onSubmit={handleSubmit} initialValues={book} />
    </div>
  );
}

EditBook.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    })
  ).isRequired,
  setBooks: PropTypes.func.isRequired,
};

export default EditBook;
