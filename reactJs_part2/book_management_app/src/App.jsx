import { useState } from 'react';
// routers
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// custom components
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';

function App() {
  const [books, setBooks] = useState([]);

  return (
    <Router>
      <div>
        <h1>Welcome to Book Management</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/add">Add Book</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<BookList books={books} setBooks={setBooks} />} />
          <Route path="/add" element={<AddBook books={books} setBooks={setBooks} />} />
          <Route path="/edit/:id" element={<EditBook books={books} setBooks={setBooks} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
