import React from 'react';
import MovieCard from '../components/MovieCard';

const MoviesBody = ({movies}) => {
    return (
        <div className='moviesBody'>
              {movies.map(movie=><MovieCard movie={movie}/>)} 
        </div>
    )
}

export default MoviesBody
