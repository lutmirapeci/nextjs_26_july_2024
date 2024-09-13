import PropTypes from 'prop-types';
// components
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';

const MovieDetails = ({ record }) => {
  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        alt={record.show?.name}
        height="400"
        image={record.show?.image?.original || 'https://via.placeholder.com/350x400'}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="div" gutterBottom align="center">
          {record.show?.name}
        </Typography>

        <Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">
                <strong>Country:</strong> {record.show?.network?.country?.code || 'N/A'}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">
                <strong>Premiere:</strong> {record.show?.premiered || 'N/A'}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">
                <strong>Time:</strong> {record.show?.schedule?.time || 'N/A'}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">
                <strong>Genre:</strong> {record.show?.genres[0] || 'N/A'}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">
                <strong>Network:</strong> {record.show?.network?.name || 'N/A'}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">
                <strong>Ratings:</strong> {record.show?.rating?.average || 'N/A'}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

MovieDetails.propTypes = {
  record: PropTypes.shape({
    show: PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.shape({
        original: PropTypes.string,
      }),
      network: PropTypes.shape({
        country: PropTypes.shape({
          code: PropTypes.string,
        }),
        name: PropTypes.string,
      }),
      premiered: PropTypes.string,
      schedule: PropTypes.shape({
        time: PropTypes.string,
      }),
      genres: PropTypes.arrayOf(PropTypes.string),
      rating: PropTypes.shape({
        average: PropTypes.number,
      }),
    }),
    season: PropTypes.number,
    number: PropTypes.number,
  }).isRequired,
};

export default MovieDetails;
