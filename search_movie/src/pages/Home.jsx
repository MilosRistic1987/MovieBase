import React from 'react';
import { useState, useEffect } from 'react';
import MoviesHeader from '../components/MovieHeader';
import MoviesBody from '../components/MoviesBody';
import MoviesFooter from '../components/MoviesFooter';



const Home = () => {

    const[title,setTitle]=useState('');
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([])
    const [displayedMovies, setDisplayedMovies] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(3)
 


    useEffect(() => {
        setFilteredMovies(movies)
    }, [movies])

    useEffect(() => {
        sliceMovies(startIndex, endIndex)
    }, [startIndex, endIndex])

    useEffect(() => {
        sliceMovies(0, 3)
        setStartIndex(0)
        setEndIndex(3)
    }, [filteredMovies])

    const sliceMovies = (start, end) => {
        const copiedMovies = [...filteredMovies]
        const slicedMovies = copiedMovies.slice(start, end)
        setDisplayedMovies(slicedMovies)
    }

    const setIndexes = (type) => {
        if (type === 'prev') {
            setStartIndex(startIndex - 3); setEndIndex(endIndex - 3)
        } else {
            setStartIndex(startIndex + 3); setEndIndex(endIndex + 3)
        }
    }

    return (
        <div className='wrapper'>
            <MoviesHeader title={title} setTitle={setTitle} setFilteredMovies={setFilteredMovies} filteredMovies={filteredMovies}  movies = {movies} setMovies={setMovies} />
            <MoviesBody movies={displayedMovies} />
           {movies.length?<MoviesFooter setIndexes={setIndexes} startIndex={startIndex} endIndex={endIndex} moviesCount={filteredMovies.length} />:<div></div>} 
        </div>


    )
}

export default Home
