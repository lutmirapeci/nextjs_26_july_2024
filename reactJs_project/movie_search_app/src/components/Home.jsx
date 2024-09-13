import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// custom components
import MoviesList from './MoviesList';

const Home = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://api.tvmaze.com/schedule?country=US');
      const data = await response.json();
      setMovies(data || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.show.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <MoviesList movies={filteredMovies} />
      )}
    </div>
  );
};

Home.propTypes = {
  searchQuery: PropTypes.string.isRequired,  
};

export default Home;
