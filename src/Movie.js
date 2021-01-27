import React from 'react';
import propTypes from 'prop-types';
import Vote from './Vote'
import './Movie.css'

{/* <Vote /> */}

function Movie({id, year, title, summary, poster, vote}){
    return (
    <div className="movie">
        <img src={"https://image.tmdb.org/t/p/original/"+poster} alt={title} title={title} className="movie__image"/>
        <div className="movie__data">
            <div className="title__section">
                <div className="movie__title">{title}</div>
            </div>
            <span className="movie__year">{year}</span>
            <ul className="menu-content">
                <li><span className="fa fa-heart-o">{vote * 10}</span></li>
            </ul>

            {/* <ul className="genres">
                {genres.map((genre, index) => (
                    <li key={index} className="genres__genre">{genre}</li>
                ))}
            </ul> */}
            {/* <div className="vote__section">
                <Vote />
                <h4 className="movie__vote">{vote * 10}</h4>
                <span>℃</span>
            </div> */}
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