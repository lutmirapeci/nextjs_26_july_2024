import PropTypes from 'prop-types';
import MovieDetails from './MovieDetails';

const MoviesList = ({ movies}) => {
    return (
        <div className="ui segment">
            <div className="ui three column grid" style={{ marginTop: '5px' }}>
                {movies.map(record => {
                    return (
                        <MovieDetails
                            key={record.id}
                            record={record}
                           
                        />
                    );
                })}
            </div>
        </div>
    );
};

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MoviesList;
