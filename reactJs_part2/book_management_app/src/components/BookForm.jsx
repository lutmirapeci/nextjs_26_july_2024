import PropTypes from 'prop-types';
import { useState } from 'react';

function BookForm({ onSubmit, initialValues }) {
  const [title, setTitle] = useState(initialValues?.title || '');
  const [author, setAuthor] = useState(initialValues?.author || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, author });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Author:</label>
        <input 
          type="text" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string
  })
};

export default BookForm;
