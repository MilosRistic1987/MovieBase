import React from 'react';
import logo from '../img/logoBack.svg'

const NoMovieCard = () => {
    return (
        <div className='noMovieWrapp'>
            <div className="noMovieCard">
                <img src={logo} alt='logo'/>
                <h1>Movie not found</h1>
                <p>There is not such movie title in our base.Please choose a different one</p>
                <h4>Your Movie Base</h4>
            </div>
            
        </div>
    )
}

export default NoMovieCard
