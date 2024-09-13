import { useState, useEffect } from 'react';
import MoviesList from './MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api.tvmaze.com/schedule?country=US");
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

  return (
    <div>
      {loading ? <p>Loading...</p> : (
        <MoviesList
          movies={movies}          
        />
      )}
    </div>
  );
};

export default Home;
