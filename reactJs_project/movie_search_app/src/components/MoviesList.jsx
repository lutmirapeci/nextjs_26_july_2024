import PropTypes from 'prop-types';
// components
import Grid from '@mui/material/Grid2';
// custom components
import MovieDetails from './MovieDetails';


const MoviesList = ({ movies }) => {
    return (
        <Grid container spacing={4} sx={{ padding: 2 }}>
            {movies.map(record => (
                <Grid item xs={12} sm={6} md={4} key={record.id}>
                    <MovieDetails record={record} />
                </Grid>
            ))}
        </Grid>
    );
};

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MoviesList;
