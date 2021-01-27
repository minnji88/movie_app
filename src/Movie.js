import React from 'react';
import propTypes from 'prop-types';
import './Movie.css'

function Movie({id, year, title, summary, poster, vote}){
    return (
    <div className="movie">
        <img src={"https://image.tmdb.org/t/p/original/"+poster} alt={title} title={title} className="movie__image"/>
        <div className="movie__data">
            <div className="movie__title">{title}</div>
            <h3 className="movie__year">{year}</h3>

            {/* <ul className="genres">
                {genres.map((genre, index) => (
                    <li key={index} className="genres__genre">{genre}</li>
                ))}
            </ul> */}
            <h4 className="movie__vote">{vote}</h4>
            <div className="movie__summary">{summary}</div>
        </div>
    </div>
    );
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    year: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    vote: propTypes.number.isRequired
    // genres: propTypes.arrayOf(propTypes.string).isRequired
};

export default Movie;