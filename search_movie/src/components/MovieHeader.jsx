import React from 'react';
import { FaVideo } from 'react-icons/fa';
import { getMoviesBySearch, getMoviesByImdbId } from '../sevices/moviesAPI';
import  AdvancedSearch from './AdvancedSearch';

const MoviesHeader = ({title,setTitle, movies, filteredMovies, setFilteredMovies, setMovies}) => {
   

    const handleInputChange=(e)=>{
        setTitle(e.target.value);
    }

    const handleSearch=(e)=>{
        e.preventDefault();   
        let array = [];
        getMoviesBySearch(title).then(res => {
            let data = res.data.Search
            const ids = data.map(el => el.imdbID)

            Promise.all(ids.map(id => {
                return new Promise(function (resolve, reject) {
                    getMoviesByImdbId(id).then(res => {
                        array.push(res.data)
                        resolve()
                    })
                })
            })).then(() => {
                setMovies(array)

            });

        }
        );
    }


    return (
        <div className='moviesHeader'>
            <h1>Search Movie by Title</h1>
            <form onSubmit={(e)=>handleSearch(e)}>
                <input  value={title} className='serachInpt' placeholder='enter valid movie title' onChange={(e)=>handleInputChange(e)} />
                <button className='searchBtn' type='submit'>
                    <FaVideo/>
                </button>
            </form>
            {movies.length? <AdvancedSearch movies={movies} filteredMovies={filteredMovies} setFilteredMovies={setFilteredMovies}/>: <div></div>}
           
            
        </div>
    )
}

export default MoviesHeader
