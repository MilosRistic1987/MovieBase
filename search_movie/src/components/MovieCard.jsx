import React from 'react';
import { FaStar } from 'react-icons/fa';
import moviePoster from '../img/moviePoster.jpg';
import logoBack from '../img/logoBack.svg'

const MovieCard = ({ movie }) => {

    const src = movie.Poster === 'N/A' ? moviePoster : movie.Poster

    return (
        <div className="card">
            <div className='innerCard'>
                <div className='cardFront'>
                    <img className='moviePoster' src={src} alt='movie poster' />
                    <h2 className="contentHeading">{movie.Title}</h2>
                    <h3>{movie.Actors}</h3>
                    <h3 className='movieDirector'>{movie.Director}</h3>
                    <h5>{movie.Production}</h5>
                    <h5>{movie.Genre}</h5>
                </div>
                <div className="cardBack">
                    <div className='rating'>
                        <FaStar className='ratingIcon' title='IMDB rating' />
                        <label >{movie.imdbRating}</label>
                    </div>
                    <div className="cardBackInfoWrapp">
                        <img className="logoBack" src={logoBack} alt="logoBack" />
                        <label className='cardBackLbl'>{movie.Writer}</label>
                        <label className='cardBackLbl'>Writters</label>
                        <p>{movie.Plot}</p>
                        <h1 >{movie.Runtime}</h1>
                        <h2>{movie.Released}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
