import PropTypes from 'prop-types';

const MovieDetails = ({ record }) => {
    return (
        <div className="ui teal placeholder segment" style={{ marginLeft: "70px", marginTop: "10px", gridGap: "0 5px" }}>
            <img
                alt={record.show?.name}
                className='ui medium rounded image'
                src={record.show?.image?.original}
                style={{ width: "350px" }}
            />
            <div className="ui teal segment">
                <h4 className="ui header" style={{ color: "teal" }}>
                    <center>{record.show?.name}</center>
                </h4>
                
                
                    <table className="ui celled table" style={{ fontSize: 10, wordWrap: "break-word" }}>
                        <tbody>
                            <tr>
                                <td style={{ color: "teal" }}>
                                    <strong>Country</strong><br />
                                    {record.show?.network?.country?.code}
                                </td>
                                <td style={{ color: "teal" }}>
                                    <strong>Premiere</strong><br />
                                    {record.show?.premiered}
                                </td>
                                <td style={{ color: "teal" }}>
                                    <strong>Time</strong><br />
                                    {record.show?.schedule?.time}
                                </td>
                                <td style={{ color: "teal" }}>
                                    <strong>Genre</strong><br />
                                    {record.show?.genres[0]}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ color: "teal" }}>
                                    <strong>Network</strong><br />
                                    {record.show?.network?.name}
                                </td>
                                <td style={{ color: "teal" }}>
                                    <strong>Ratings</strong><br />
                                    {record.show?.rating?.average}
                                </td>
                                <td style={{ color: "teal" }}>
                                    <strong>Season</strong><br />
                                    {record.season}
                                </td>
                                <td style={{ color: "teal" }}>
                                    <strong>Episode</strong><br />
                                    {record.number}
                                </td>
                            </tr>
                        </tbody>
                    </table>
           
            </div>
        </div>
    );
};

MovieDetails.propTypes = {
    record: PropTypes.shape({
        show: PropTypes.shape({
            name: PropTypes.string,
            image: PropTypes.shape({
                original: PropTypes.string
            }),
            summary: PropTypes.string,
            network: PropTypes.shape({
                country: PropTypes.shape({
                    code: PropTypes.string
                }),
                name: PropTypes.string
            }),
            premiered: PropTypes.string,
            schedule: PropTypes.shape({
                time: PropTypes.string
            }),
            genres: PropTypes.arrayOf(PropTypes.string),
            rating: PropTypes.shape({
                average: PropTypes.number
            })
        }),
        season: PropTypes.number,
        number: PropTypes.number
    }).isRequired,
};

export default MovieDetails;
